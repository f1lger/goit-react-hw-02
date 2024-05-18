/* eslint-disable react/prop-types */
import style from "./Options.module.css"
const Options = ({
  options,
  onUpdateFeedback,
  isResetButtonVisible,
  handleResetFeedback
}) => {
  return (
    <>
      {options.map((item) => (
        <button
          className={style.feedbackButton}
          onClick={() => onUpdateFeedback(item)}
          key={item}
        >
          {item}
        </button>
      ))}
      {isResetButtonVisible && (
        <button onClick={handleResetFeedback}>Reset</button>
      )}
    </>
  );
};

export default Options;
