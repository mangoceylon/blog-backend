'use strict'

const controller = require('lib/wiring/controller')
const models = require('app/models')
const Comment = models.comment

const authenticate = require('./concerns/authenticate')
const setUser = require('./concerns/set-current-user')
const setModel = require('./concerns/set-mongoose-model')

const index = (req, res, next) => {
  Comment.find()
    .then(comments => res.json({
      comments: comments.map((e) =>
        e.toJSON({ virtuals: true, user: req.user }))
    }))
    .catch(next)
}

const show = (req, res) => {
  res.json({
    comment: req.comment.toJSON({ virtuals: true, user: req.user })
  })
}

const create = (req, res, next) => {
  const comment = Object.assign(req.body.comment, {
    _owner: req.user._id
  })
  Comment.create(comment)
    .then(comment =>
      res.status(201)
        .json({
          comment: comment.toJSON({ virtuals: true, user: req.user })
        }))
    .catch(next)
}

const update = (req, res, next) => {
  delete req.body._owner  // disallow owner reassignment.
  req.comment.update(req.body.comment)
    .then(() => res.sendStatus(204))
    .catch(next)
}

const destroy = (req, res, next) => {
  req.comment.remove()
    .then(() => res.sendStatus(204))
    .catch(next)
}

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy
}, { before: [
  { method: setUser, only: ['index', 'show'] },
  { method: authenticate, except: ['index', 'show'] },
  { method: setModel(Comment), only: ['show'] },
  { method: setModel(Comment, { forUser: true }), only: ['update', 'destroy'] }
] })
