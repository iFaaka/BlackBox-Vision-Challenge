import React from "react";

export const Card = ({
  question,
  categ,
  diffi,
  answers,
  correct,
  nextQuestion,
  setScore,
  type,
}) => {
  const handleClick = (ans) => {
    if (ans === correct) {
      if (type === "boolean") {
        setScore((prevS) => prevS + 5);
      } else {
        setScore((prevS) => prevS + 10);
      }
    }
    nextQuestion((prevS) => prevS + 1);
  };

  return (
    <div>
      <p>{question}</p>
      <p>Category: {categ}</p>
      <p>Difficulty: {diffi}</p>
      <div className="button-container">
        {answers.map((ans) => (
          <button key={ans} onClick={() => handleClick(ans)}>
            {ans}
          </button>
        ))}
      </div>
    </div>
  );
};
