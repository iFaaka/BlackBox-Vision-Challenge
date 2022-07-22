import React, { useState } from "react";
import "./stylesheets/Card.css";
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
  const [isCorrect, setIsCorrect] = useState(0);
  const handleClick = (ans) => {
    if (ans === correct) {
      if (type === "boolean") {
        setIsCorrect(1);
        setTimeout(() => {
          setIsCorrect(0);
          setScore((prevS) => prevS + 5);
          nextQuestion((prevS) => prevS + 1);
        }, 1000);
      } else if (type === "multiple") {
        setIsCorrect(1);
        setTimeout(() => {
          setIsCorrect(0);
          setScore((prevS) => prevS + 10);
          nextQuestion((prevS) => prevS + 1);
        }, 1000);
      }
    } else {
      setTimeout(() => {
        nextQuestion((prevS) => prevS + 1);
      }, 500);
    }
  };
  console.log(answers);
  return (
    <div className="card-container">
      <p>{question}</p>
      <p>Category: {categ}</p>
      <p>Difficulty: {diffi}</p>
      <div className="button-container">
        {answers.map((ans) => (
          <button
            className={`${isCorrect === 1 && ans === correct ? "correct" : ""}`}
            key={ans}
            onClick={() => handleClick(ans)}
          >
            {ans}
          </button>
        ))}
      </div>
    </div>
  );
};
