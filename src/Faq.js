import React from "react";
import SingleQuestion from "./SingleQuestion";
import questionsData from "./questionsData";

function Questions() {
  return (
    <article className="faq">
      <h1 className="faq-title">FAQ</h1>
      {questionsData.map((question) => {
        return (
          <SingleQuestion key={question.id} {...question}></SingleQuestion>
        );
      })}
    </article>
  );
}

export default Questions;
