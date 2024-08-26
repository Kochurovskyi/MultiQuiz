# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## New Features

1. **Random Reflection of Questions**: Questions are displayed in a random order each time the quiz is taken.
2. **Random Reflection of Answer Options**: Answer options for each question are displayed in a random order.
3. **MultiQuiz Topics**: The application currently supports the following quiz topics:
   - Python Quiz - Basics
   - Python Quiz - OOP
   - React Quiz - Basics
   - React Quiz - Hooks
   - Web Architecture

## Functionality Description

### `App.js`

- **Header**: Displays the header of the application.
- **Main**: Contains the main content of the application.
- **Loader**: Displays a loading spinner when the quiz is loading.
- **Error**: Displays an error message if there is an issue loading the quiz.
- **StartScreen**: Displays the start screen of the quiz.
- **Question**: Displays the current question and its options.
- **NextButton**: Button to proceed to the next question.
- **Progress**: Displays the progress of the quiz.
- **FinishScreen**: Displays the finish screen when the quiz is completed.
- **Footer**: Contains the timer and next button.
- **Timer**: Displays the remaining time for the quiz.

### `Progress.js`

- Displays the current progress of the quiz, including the current question number, total number of questions, current points, and maximum possible points.

### `Question.js`

- Displays the current question and its options using the `Options` component.

### `Options.js`

- Displays the answer options for the current question. Each option is a button that can be clicked to select an answer. The buttons are styled based on whether the answer is correct or incorrect.

### `Timer.js`

- Displays a countdown timer for the quiz. The timer updates every second and dispatches a `tick` action to update the remaining time.

### `QuizContext.js`

- **QuizContext**: Provides the context for the quiz state and actions.
- **initialState**: Defines the initial state of the quiz, including questions, status, index, answer, points, highscore, and seconds remaining.
- **shuffleArray**: Utility function to shuffle an array using the Fisher-Yates algorithm.
- **shuffleOptions**: Utility function to shuffle the options of a question and update the correct option index.
- **reducer**: Handles state transitions based on dispatched actions, including loading data, starting the quiz, answering questions, moving to the next question, finishing the quiz, restarting the quiz, and ticking the timer.
- **QuizProvider**: Provides the quiz state and dispatch function to the component tree.
- **useQuiz**: Custom hook to access the quiz context.
