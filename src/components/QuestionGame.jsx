import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { getData } from "./getData";
import "./stylesheets/QuestionGame.css";
var he = require("he");
export const QuestionGame = () => {
  const [data, setData] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [gamesCount, setGamesCount] = useState(1);
  useEffect(() => {
    async function awaitData() {
      let myData = await getData();
      setData(myData);
    }
    awaitData();
  }, [gamesCount]);
  console.log(score);
  let fragment;

  if (data.length > 0 && questionNumber < 10) {
    console.log(data);
    fragment = (
      <Card
        question={he.decode(data[0][questionNumber].question)}
        answers={[
          ...data[0][questionNumber].incorrect_answers.map((item) =>
            he.decode(item)
          ),
          he.decode(data[0][questionNumber].correct_answer),
        ].sort(() => Math.random() - 0.5)}
        diffi={data[0][questionNumber].difficulty}
        correct={he.decode(data[0][questionNumber].correct_answer)}
        categ={he.decode(data[0][questionNumber].category)}
        type={data[0][questionNumber].type}
        nextQuestion={setQuestionNumber}
        setScore={setScore}
      />
    );
  } else if (10 === questionNumber) {
    fragment = (
      <div className="finish-container">
        <h2>We are done! Your score was: {score}/100</h2>
        <span>You plays {gamesCount} times</span>
        <button
          onClick={() => {
            setGamesCount((prevS) => prevS + 1);
            setTimeout(() => {
              setQuestionNumber(0);
              setScore(0);
            }, 2000);
          }}
        >
          Volver a empezar
        </button>
      </div>
    );
  } else {
    fragment = <h4>Loading...</h4>;
  }
  return (
    <div className="question-game-container">
      <div className="title-container">
        <h1>QuestionGame</h1>
        <div className="subtitle-container">
          <h2>Powered by:</h2>
          <img src="https://res.cloudinary.com/blackboxvision/image/upload/f_auto,c_limit,w_256,q_auto/v1624760386/website/logos/logo-transparent_vzcuce.png"></img>
        </div>
      </div>

      {fragment}
    </div>
  );
};
