

## Introduction

Hi and Welcome to my attempt at the **PTO Genius** take-home project. My goal was to satisfy the base requirements and 
to make it run easily and well. My approach to code is similar to my approach to life: Minimalism.

You should give every task and challenge the time and attention it needs to be solved, no less or no more. It should do what you want, do it well and within your standards. It should be testable, straightforward and easy to pick upon for anyone else that might have to work on your code in the future.

## Getting Started

As you may have noticed, I have chosen to "dockerize" the rails application and the associated database.

To run the application you will need to the following:
* Have docker installed. Find out more [here](https://docs.docker.com/desktop/).
* In your preferred flavor of terminal interface run the following:
  * ``docker-compose up --build``
  * In a different terminal instance: ``docker-compose exec api bin/rake db:setup``
  * You should now restart your `docker-compose` instance by closing the terminal and relaunching with `docker-compose up`
* Now we will need to run the react front-end by doing the following:
  * `cd` into `client`
  * Run `npm install`
  * Run `npm start`

Congratulations! If all went well, you should now be able to navigate to `localhost:3000` in your browser and see the application working at its fullest potential.

I hope you enjoy my work :)

## Post Scriptum

Wishlist of things, I would have liked to have done: 
* Full integration tests
* Front-end support for CRUD operations on the Movie Class.
* Using the movie name to query the **IMDB** api to enrich the movie details and dynamically populate the movie poster.

Thank you for your time and I hope to be working with you more in the future.