# Frontend Mentor - Link-sharing app
This is a challenge provided by Frontend mentor

![Click here to preview challenge page](./preview.jpg)

## Welcome! 👋

This is Devlinks, my second completion for a GURU challenge in Frontend mentor :D
The web application provides a way for developers to share their social links easily.

For a quick peak, here's the [live version hosted at Vercel](https://elhuzain-devlinks.vercel.app).

## The challenge

NOTE: This is the challenge description from Frontend Mentor:

Your challenge is to build out this link-sharing app and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- Create, read, update, delete links and see previews in the mobile mockup
- Receive validations if the links form is submitted without a URL or with the wrong URL pattern for the platform
- Drag and drop links to reorder them
- Add profile details like profile picture, first name, last name, and email
- Receive validations if the profile details form is saved with no first or last name
- Preview their devlinks profile and copy the link to their clipboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Save details to a database (build the project as a full-stack app)
- **Bonus**: Create an account and log in (add user authentication to the full-stack app)

Want some support on the challenge? [Join our community](https://www.frontendmentor.io/community) and ask questions in the **#help** channel.

## Approach

To satisfy the required functionality, I started by selecting components needed.

### Backend

Since my main focus is on the client-side application, I went with Firebase' services.

- [Firebase Authentication](https://firebase.google.com/docs/auth) for user authentication
- [Firebase' Firestore](https://firebase.google.com/docs/firestore) to store user data
- [Firebase' Storage](https://firebase.google.com/docs/storage) to store user images

### Client-side application

- [Nextjs](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/) to not get lost in datatypes
- [Chadcn-ui](https://ui.shadcn.com/) for pre-baked accessible UI elements
- [Zod](https://zod.dev/) and [react-hook-form](https://react-hook-form.com/) for form handling and validation
- [Redux](https://redux.js.org/) for state management
- [React-hot-toast](https://react-hot-toast.com/) for toast messages

## Project Outcomes

Building this project, I have set goals, learned something, and struggled with some.

### What I learned

Throughout building this projects, I planned to enhance my skills in the following:

- Gain a better understanding of Nextjs app router.
- Further explore client-side / server-side components & when/why to use either.
- Further explore TypeScript best practices, still need to work on that.
- Enhance my code readability and scalability.

### What I need to work on

Upon finishing this project, I highlighted some parts that I should work on in the next project:

- Using Nextjs' backend capabilities
- More TypeScript
- Futher utilizing Nextjs' file-based system
- Usage of drag-and-drop libraries

## Installation

To install the project
1. Clone the repository `git clone https://github.com/ElHuzain/link-sharing-app.git`
2. Run development environment using `npm run dev`, or build using `npm run build`.


