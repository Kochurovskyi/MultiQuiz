import { useQuiz } from "../contexts/QuizContext";

function StartScreen() {
  const { dispatch } = useQuiz();

  const startPythonQuizBasics = () => {
    dispatch({ type: "loadPythonQuizBasics" });
    dispatch({ type: "start" });
  };
  const startPythonQuizOOP = () => {
    dispatch({ type: "loadPythonQuizOOP" });
    dispatch({ type: "start" });
  };

  const startReactQuizBasics = () => {
    dispatch({ type: "loadReactQuizBasics" });
    dispatch({ type: "start" });
  };
  const startReactQuizHooks = () => {
    dispatch({ type: "loadReactQuizHooks" });
    dispatch({ type: "start" });
  };
  const startWebQuizArch = () => {
    dispatch({ type: "loadWebQuizArch" });
    dispatch({ type: "start" });
  };

  return (
    <div className="start">
      <h2>20 questions each</h2>
      <h3>You have 10 minutes. Select...</h3>
      <div className="start">
        <button className="btn btn-ui" onClick={startPythonQuizBasics}>
          <img src="/Python.png" alt="Python Icon" />
          Python Quiz - basics
        </button>
        <button className="btn btn-ui" onClick={startPythonQuizOOP}>
          <img src="/Python.png" alt="Python Icon" />
          Python Quiz - OOP
        </button>
        <button className="btn btn-ui" onClick={startReactQuizBasics}>
          <img src="/React.png" alt="React Icon" />
          React Quiz - basics
        </button>
        <button className="btn btn-ui" onClick={startReactQuizHooks}>
          <img src="/React.png" alt="React Icon" />
          React Quiz - Hooks
        </button>
        <button className="btn btn-ui" onClick={startWebQuizArch}>
          <img src="/Flst.png" alt="React Icon" />
          Web Architecture
        </button>
      </div>
    </div>
  );
}

export default StartScreen;
