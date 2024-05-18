import { useEffect, useState } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import style from "./App.module.css";
import "./App.module.css";
import Notification from "../Notification/Notification";

const INITIAL_FEEDBACK = { good: 0, neutral: 0, bad: 0 };

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("saved-feedback"));
    return savedFeedback ? savedFeedback : INITIAL_FEEDBACK;
  });

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };
  useEffect(() => {
    localStorage.setItem("saved-feedback", JSON.stringify(feedback));
  }, [feedback]);

  const handleResetFeedback = () => {
    setFeedback(INITIAL_FEEDBACK);
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedbackPercentage = Math.round(
    (feedback.good / totalFeedback) * 100
  );
  return (
    <div className={style.appCont}>
      <Description />
      <Options
        options={["good", "neutral", "bad"]}
        onUpdateFeedback={updateFeedback}
        isResetButtonVisible={totalFeedback > 0}
        handleResetFeedback={handleResetFeedback}
      />
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positivePercentage={positiveFeedbackPercentage}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}

export default App;
