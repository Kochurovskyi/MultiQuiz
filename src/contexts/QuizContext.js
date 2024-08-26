import { createContext, useContext, useReducer, useEffect } from "react";
import pythonDataBasics from "../data/QuestionsData-pythonBasics";
import pythonDataOOP from "../data/QuestionsData-pythonOOP";
import reactDataBasics from "../data/QuestionsData-reactBasics";
import reactDataHooks from "../data/QuestionsData-reactHooks";
import webDataArch from "../data/QuestionsData-WebArch";

const QuizContext = createContext();

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  status: "loading", // 'loading', 'error', 'ready', 'active', 'finished'
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function shuffleOptions(question) {
  const { options, correctOption } = question;
  const shuffledOptions = [...options];
  const originalIndexMap = options.map((_, index) => index);

  // Fisher-Yates Shuffle
  for (let i = shuffledOptions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledOptions[i], shuffledOptions[j]] = [
      shuffledOptions[j],
      shuffledOptions[i],
    ];
    [originalIndexMap[i], originalIndexMap[j]] = [
      originalIndexMap[j],
      originalIndexMap[i],
    ];
  }

  const newCorrectOption = originalIndexMap.indexOf(correctOption);

  return {
    ...question,
    options: shuffledOptions,
    correctOption: newCorrectOption,
  };
}

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: shuffleArray(action.payload),
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "newAnswer":
      const question = state.questions[state.index];
      const isCorrect = action.payload === question.correctOption;

      return {
        ...state,
        answer: action.payload,
        points: isCorrect ? state.points + question.points : state.points,
      };
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case "restart":
      return {
        ...initialState,
        questions: shuffleArray(state.questions),
        status: "ready",
      };
    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };
    case "loadPythonQuizBasics":
      return {
        ...state,
        questions: shuffleArray(pythonDataBasics.questions.map(shuffleOptions)),
        status: "ready",
      };
    case "loadPythonQuizOOP":
      return {
        ...state,
        questions: shuffleArray(pythonDataOOP.questions.map(shuffleOptions)),
        status: "ready",
      };
    case "loadReactQuizBasics":
      return {
        ...state,
        questions: shuffleArray(reactDataBasics.questions.map(shuffleOptions)),
        status: "ready",
      };
    case "loadReactQuizHooks":
      return {
        ...state,
        questions: shuffleArray(reactDataHooks.questions.map(shuffleOptions)),
        status: "ready",
      };
    case "loadWebQuizArch":
      return {
        ...state,
        questions: shuffleArray(webDataArch.questions.map(shuffleOptions)),
        status: "ready",
      };
    default:
      throw new Error("Action unknown");
  }
}

function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0
  );

  useEffect(() => {
    // Initially, no quiz is loaded
    dispatch({ type: "dataReceived", payload: [] });
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        numQuestions,
        maxPossiblePoints,
        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");
  return context;
}

export { QuizProvider, useQuiz };
