import React, { useEffect, useState } from "react";
import { Card } from "./Card";
import { getData } from "./getData";

export const QuestionGame = () => {
  const [data, setData] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  useEffect(() => {
    async function awaitData() {
      let myData = await getData();
      setData(myData);
    }
    awaitData();
  }, []);
  console.log(score);
  let fragment;

  if (data.length > 0 && questionNumber < 10) {
    console.log(data);
    fragment = (
      <Card
        question={data[0][questionNumber].question}
        answers={[
          ...data[0][questionNumber].incorrect_answers,
          data[0][questionNumber].correct_answer,
        ].sort(() => Math.random() - 0.5)}
        diffi={data[0][questionNumber].difficulty}
        correct={data[0][questionNumber].correct_answer}
        categ={data[0][questionNumber].category}
        type={data[0][questionNumber].type}
        nextQuestion={setQuestionNumber}
        setScore={setScore}
      />
    );
  } else {
    fragment = <h2>Loading...</h2>;
  }
  return (
    <div>
      <h1>QuestionGame</h1>
      {fragment}
    </div>
  );
};
