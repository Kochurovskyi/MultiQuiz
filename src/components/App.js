import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import FinishScreen from "./FinishScreen";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuiz } from "../contexts/QuizContext";

export default function App() {
  const { status, currentQuestion } = useQuiz();

  return (
    <div className="app">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && <StartScreen />}
        {status === "active" && (
          <>
            <Progress />
            <Question question={currentQuestion} />
            <Footer>
              <div className="next-button-container">
                <Timer />
                <NextButton />
              </div>
            </Footer>
          </>
        )}
        {status === "finished" && <FinishScreen />}
      </Main>
      <div className="copyright">
        © {new Date().getFullYear()} Kochurovskyi Yurii
      </div>
    </div>
  );
}
