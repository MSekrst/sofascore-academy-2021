## Homework 4 - SofaScore Frontend Academy

This homework is designed to provide basic experience with React.
Your goal is to fetch the list of items from the desired API (List of open, free APIs can be found [here](https://github.com/public-apis/public-apis)), display data, and implement some kind of data mutation (delete, edit, highlight, ...).

## Choosing API

Choose one API from [the list](https://github.com/public-apis/public-apis) and use it as your backend service (be careful to choose API that doesn't require authentication, as it will be simpler to work with unauthenticated API).
Once you have chosen API, it's time to start building your React application.

## React project setup

We will use Create React App as it will setup the whole application structure painlessly and our app will be ready for development. CRA uses babel and webpack but hides confusing configuration files. Those files can be shown via (`yarn eject`) command which is irreversible and I wouldn't advise it. Ejecting is sometimes necessary but not in our case.

Details on how to set up CRA can be found [here](https://github.com/facebook/create-react-app).

Once CRA has finished setup, you can delete files that will not be needed (`*.svg`, `*.png`, `serviceWorker`, etc.). If you have doubts about which files are not needed don't delete anything, I will help you in your PR or you can ping me directly via Slack.

## React application

When setup is finished you can start working on your components. Try to separate components into their files. For now, we won't focus on project structure, we will talk about project structure in later lessons.

You can render and style your list as you wish. It's up to you how you will add the mutation part to list items. Try and be creative and explore concepts we've covered in previous lessons.

## Help

If you need help with homework, have trouble wrapping your head around some concept we've covered in lessons also feel free to contact me and we will clarify any confusion.
