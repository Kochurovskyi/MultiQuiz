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
  ],
};
export default data;
