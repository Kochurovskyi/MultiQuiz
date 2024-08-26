const data = {
  questions: [
    {
      question: "What's the fundamental building block of React apps?",
      options: ["Components", "Blocks", "Elements", "Effects"],
      correctOption: 0,
      points: 10,
    },
    {
      question:
        "What's the name of the syntax we use to describe the UI in React components?",
      options: ["FBJ", "Babel", "JSX", "ES2015"],
      correctOption: 2,
      points: 10,
    },
    {
      question: "How does data flow naturally in React apps?",
      options: [
        "From parents to children",
        "From children to parents",
        "Both ways",
        "The developers decides",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question: "How to pass data into a child component?",
      options: ["State", "Props", "PropTypes", "Parameters"],
      correctOption: 1,
      points: 10,
    },
    {
      question: "When to use derived state?",
      options: [
        "Whenever the state should not trigger a re-render",
        "Whenever the state can be synchronized with an effect",
        "Whenever the state should be accessible to all components",
        "Whenever the state can be computed from another state variable",
      ],
      correctOption: 3,
      points: 30,
    },
    {
      question: "What triggers a UI re-render in React?",
      options: [
        "Running an effect",
        "Passing props",
        "Updating state",
        "Adding event listeners to DOM elements",
      ],
      correctOption: 2,
      points: 20,
    },
    {
      question: 'When do we directly "touch" the DOM in React?',
      options: [
        "When we need to listen to an event",
        "When we need to change the UI",
        "When we need to add styles",
        "Almost never",
      ],
      correctOption: 3,
      points: 20,
    },
    {
      question: "In what situation do we use a callback to update state?",
      options: [
        "When updating the state will be slow",
        "When the updated state is very data-intensive",
        "When the state update should happen faster",
        "When the new state depends on the previous state",
      ],
      correctOption: 3,
      points: 30,
    },

    {
      question:
        "What is the command to create a new React app using Create React App?",
      options: [
        "npx create-react-app my-app",
        "npm create-react-app my-app",
        "npx create-react my-app",
        "npm create-react my-app",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question: "Which method is used to render a React element into the DOM?",
      options: [
        "ReactDOM.render()",
        "React.render()",
        "ReactDOM.create()",
        "React.create()",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question:
        "What is the default port number for a React app started with Create React App?",
      options: ["3000", "8080", "5000", "4000"],
      correctOption: 0,
      points: 10,
    },
    {
      question:
        "Which lifecycle method is called after a component is rendered for the first time?",
      options: [
        "componentDidMount",
        "componentWillMount",
        "componentDidUpdate",
        "componentWillUpdate",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question: "What is the purpose of the key prop in React?",
      options: [
        "To uniquely identify elements in a list",
        "To set the state of a component",
        "To pass data to child components",
        "To trigger re-renders",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question:
        "What is the correct way to update state based on the previous state?",
      options: [
        "setState(prevState => ...)",
        "setState(...)",
        "useEffect(...)",
        "useState(...)",
      ],
      correctOption: 0,
      points: 30,
    },

    {
      question: "How do you conditionally apply a class in React?",
      options: [
        "Using a ternary operator",
        "Using an if statement",
        "Using a switch statement",
        "Using a for loop",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question: "How do you handle forms in React?",
      options: [
        "Using controlled components",
        "Using uncontrolled components",
        "Using refs",
        "All of the above",
      ],
      correctOption: 3,
      points: 30,
    },
    {
      question: "How do you handle errors in React components?",
      options: [
        "Using error boundaries",
        "Using try-catch",
        "Using useEffect",
        "Using useState",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question: "How do you optimize performance in React applications?",
      options: [
        "Using React.memo",
        "Using useCallback",
        "Using useMemo",
        "All of the above",
      ],
      correctOption: 3,
      points: 30,
    },

    {
      question: "What is the purpose of the useDeferredValue hook?",
      options: [
        "To defer updates to a value",
        "To manage state",
        "To perform side effects",
        "To handle context",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question: "How do you handle routing in React applications?",
      options: [
        "Using React Router",
        "Using useRauter",
        "Using useEffect",
        "Using useContext",
      ],
      correctOption: 0,
      points: 30,
    },

    {
      question: "How do you handle global state in React applications?",
      options: [
        "Using Context API",
        "Using useState",
        "Using useEffect",
        "Using useRef",
      ],
      correctOption: 0,
      points: 30,
    },

    {
      question: "How do you handle animations in React applications?",
      options: [
        "Using CSS transitions",
        "Using React Transition Group",
        "Using Framer Motion",
        "All of the above",
      ],
      correctOption: 3,
      points: 30,
    },

    {
      question: "How do you handle accessibility in React applications?",
      options: [
        "Using ARIA attributes",
        "Using semantic HTML",
        "Using useId",
        "All of the above",
      ],
      correctOption: 3,
      points: 30,
    },
    {
      question: "What is the virtual DOM in React?",
      options: [
        "A copy of the real DOM that is kept in memory and synced with the real DOM by React",
        "A new type of DOM introduced by React",
        "A way to directly manipulate the real DOM",
        "A method to handle server-side rendering",
      ],
      correctOption: 0,
      points: 20,
    },
    {
      question: "What happens during the reconciliation process in React?",
      options: [
        "React compares the new virtual DOM with the previous one and updates the real DOM accordingly",
        "React updates the state of the component",
        "React fetches data from an API",
        "React triggers a re-render of the entire application",
      ],
      correctOption: 0,
      points: 20,
    },
  ],
};
export default data;
