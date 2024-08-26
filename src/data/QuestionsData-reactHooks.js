const data = {
  questions: [
    {
      question: "What is the primary purpose of the useState hook in React?",
      options: [
        "To manage side effects",
        "To manage state in functional components",
        "To create context",
        "To handle props",
      ],
      correctOption: 1,
      points: 10,
    },
    {
      question: "How do you import the useEffect hook in a React component?",
      options: [
        "import { useEffect } from 'react';",
        "import useEffect from 'react';",
        "import { useEffect } from 'react-hooks';",
        "import useEffect from 'react-hooks';",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question: "What does the useContext hook do in React?",
      options: [
        "It allows you to use state in functional components",
        "It allows you to use context in functional components",
        "It allows you to use side effects in functional components",
        "It allows you to use refs in functional components",
      ],
      correctOption: 1,
      points: 10,
    },
    {
      question:
        "Which hook would you use to manage a reference to a DOM element?",
      options: ["useState", "useEffect", "useRef", "useContext"],
      correctOption: 2,
      points: 10,
    },
    {
      question: "What is the purpose of the useReducer hook in React?",
      options: [
        "To manage complex state logic in functional components",
        "To manage side effects in functional components",
        "To manage context in functional components",
        "To manage refs in functional components",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question:
        "If we pass a function to useState, when will that function be called?",
      options: [
        "On each re-render",
        "Each time we update the state",
        "Only on the initial render",
        "The first time we update the state",
      ],
      correctOption: 2,
      points: 30,
    },
    {
      question:
        "Which hook to use for an API request on the component's initial render?",
      options: ["useState", "useEffect", "useRef", "useReducer"],
      correctOption: 1,
      points: 10,
    },
    {
      question:
        "Which variables should go into the useEffect dependency array?",
      options: [
        "Usually none",
        "All our state variables",
        "All state and props referenced in the effect",
        "All variables needed for clean up",
      ],
      correctOption: 2,
      points: 30,
    },
    {
      question: "An effect will always run on the initial render.",
      options: [
        "True",
        "It depends on the dependency array",
        "False",
        "In depends on the code in the effect",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question:
        "When will an effect run if it doesn't have a dependency array?",
      options: [
        "Only when the component mounts",
        "Only when the component unmounts",
        "The first time the component re-renders",
        "Each time the component is re-rendered",
      ],
      correctOption: 3,
      points: 20,
    },
    {
      question: "Which hook is used to manage state in a functional component?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      correctOption: 0,
      points: 10,
    },
    {
      question: "What does the useEffect hook do?",
      options: [
        "Manages state effects",
        "Performs side effects",
        "Handles context effects",
        "Manages refs effects",
      ],
      correctOption: 1,
      points: 10,
    },
    {
      question: "How do you create a ref in a functional component?",
      options: ["useRef", "createRef", "useRefFunc", "useRefEffect"],
      correctOption: 0,
      points: 20,
    },
    {
      question:
        "Which hook would you use to optimize performance by memoizing a value?",
      options: ["useMemo", "useCallback", "useOptimize", "useMemoValue"],
      correctOption: 0,
      points: 20,
    },
    {
      question: "What is the purpose of the useReducer hook?",
      options: [
        "To manage complex state logic",
        "To perform side effects",
        "To handle reduced context",
        "To create reduced refs",
      ],
      correctOption: 0,
      points: 20,
    },
    {
      question: "What is the second argument of the useEffect hook?",
      options: [
        "Dependency array",
        "Initial state",
        "Callback function",
        "Cleanup function",
      ],
      correctOption: 0,
      points: 20,
    },
    {
      question: "What is the purpose of the useContext hook?",
      options: [
        "To consume context values",
        "To create context",
        "To manage context state",
        "To perform side effects",
      ],
      correctOption: 0,
      points: 20,
    },
    {
      question: "Which hook would you use to memoize a callback function?",
      options: ["useCallback", "useMemo", "useMemorize", "useMemoFunc"],
      correctOption: 0,
      points: 20,
    },
    {
      question: "What is the purpose of the useRef hook?",
      options: [
        "To create a mutable ref object",
        "To manage referal state",
        "To perform reference effects",
        "To handle reference context",
      ],
      correctOption: 0,
      points: 20,
    },
    {
      question: "How do you prevent a useEffect from running on every render?",
      options: [
        "By providing a dependency array",
        "By using useMemo",
        "By using useCallback",
        "By using useRef",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question: "What is the purpose of the cleanup function in useEffect?",
      options: [
        "To clean up side effects",
        "To clean upstate",
        "To clean up context",
        "To clean up refs",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question: "What is the purpose of the useLayoutEffect hook?",
      options: [
        "To perform side effects after DOM updates",
        "To manage state",
        "To handle context",
        "To create refs",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question: "What is the purpose of the useTransition hook?",
      options: [
        "To manage state transitions",
        "To perform side effects",
        "To handle context",
        "To create refs",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question: "How do you handle asynchronous operations in React?",
      options: [
        "Using useEffect",
        "Using useState",
        "Using useReducer",
        "Using useRef",
      ],
      correctOption: 0,
      points: 30,
    },
    {
      question:
        "What is the primary purpose of the useDeferredValue hook in React?",
      options: [
        "To defer updates to a value until the browser is idle",
        "To delay state updates until the next render",
        "To postpone side effects until after rendering",
        "To throttle updates to a value during high-frequency events",
      ],
      correctOption: 0,
      points: 30,
    },
  ],
};
export default data;
