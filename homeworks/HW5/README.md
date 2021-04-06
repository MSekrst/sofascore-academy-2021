## Homework 5 - SofaScore Frontend Academy

The goal of this homework is to explore React Hooks. This homework could be later reused as part of the final project.

## React project setup

We will use Create React App, just like in previous homework. [Instructions for CRA initialization in previous homework](https://github.com/MSekrst/sofascore-academy-2020/tree/master/homework/04#react-project-setup).

## Task

Similar to Homework 1 - Your task is to make a Login screen.
Try to use hooks we've covered so far, also handle edge cases (empty fields, incorrect credentials, ...).

**API only receives and sends JSON requests/responses, even errors are returned as JSON.**

To complete the login process you have to provide `username` and `password` that the user inserted. Credentials are then sent to
`https://private-leagues-api.herokuapp.com/api/login`. Note that route only receives POST requests with correct `Content-Type`.

A dummy user is already created in the database (`username` is `testUser` and `password` is `testUser-password`) so use these credentials to archive successful login.

## Help

If you need help with homework, have trouble wrapping your head around some concept we've covered in lessons also feel free to contact me and we will clarify any confusion.
