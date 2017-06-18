
# Personal Website

This is my personal website project. It serves as a personal site, blog, and also as a playground to test code.

##It uses the MERN stack:
*Mongo
*Express
*React
*Node

## Project Links
 - **Deployed Client:** http://mangoceylon.com
 - **Deployed API:** https://radiant-eyrie-20208.herokuapp.com
 - **API Github Repo:** https://github.com/mangoceylon/blog-backend
 - **Client Repo:** https://github.com/mangoceylon/blog

## Technologies Used

This application uses React on the front end. It makes use of React Router, and some React addon packages. On the back-end the API uses Express, Node, Mongo, and Mongoose.

The front-end is deployed to Amazon S3, and the backend to Heroku, it has scripts for CLI deployment for both.

## Approach

The backend of this application uses User auth and a Comment object that has CRUD functionality via a RESTful API.

## Data model

```
{
  comment: {
    title:
    description:
  }
}
```

## Routes

### User Routes

| Verb   | URI Pattern            | Controller#Action |
|--------|------------------------|-------------------|
| POST   | `/sign-up`             | `users#signup`    |
| POST   | `/sign-in`             | `users#signin`    |
| PATCH  | `/change-password/:id` | `users#changepw`  |
| DELETE | `/sign-out/:id`        | `users#signout`   |

### Comment routes

| Verb   | URI Pattern              | Controller#Action   |
|--------|--------------------------|---------------------|
| GET    | `/comments`              | `comments#index`    |
| GET    | `/comments/:id`          | `comments#show`     |
| POST   | `/comments`              | `comments#create`   |
| PATCH  | `/comments/:id`          | `comments#update`   |
| DELETE | `/comments/:id`          | `comments#destroy`  |

## ERD
![alt text](https://raw.githubusercontent.com/mangoceylon/blog-backend/a90016edc5f090b7bad63549a86ad4367c99151b/Screen%20Shot%202017-06-18%20at%201.24.05%20AM.png "ERD")
