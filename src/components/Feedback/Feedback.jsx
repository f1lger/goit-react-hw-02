/* eslint-disable react/prop-types */
import style from "./Feedback.module.css";
const Feedback = ({ feedback, totalFeedback, positivePercentage }) => {
  return (
    <>
      <ul className={style.feedbackList}>
        {Object.entries(feedback).map(([name, count]) => (
          <li className={style.feedbackListItem} key={name}>
            {name}: {count}
          </li>
        ))}
      </ul>
      <p className={style.totalFeedback}>
        Total: {totalFeedback}
      </p>
      <p className={style.positivePercentage}>
        Positive: {positivePercentage}%
      </p>
    </>
  );
};

export default Feedback;
