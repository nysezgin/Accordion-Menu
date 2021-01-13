import React, { useState } from "react";
import arrow from "./images/icon-arrow-down.svg"

function SingleQuestion({question, answer}) {
  const [showAnswer, setShowAnswer] = useState(false);
    return (
      <>
        {showAnswer ? (
      <article className="single-question">
          <button
            className="single-question__button"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            <p className="single-question__button-selected">{question}</p>
            <img
              src={arrow}
              alt=""
              className="single-question__button-upArrow"
            />
          </button>
          <section className="single-question__answer">
            <p>{answer}</p>
          </section>
          </article>
        ) : (
      <article className="single-question">
          <button
            className="single-question__button"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            <p>{question}</p>
            <img
              src={arrow}
              alt=""
              className="single-question__button-downArrow"
            />
          </button>
          <section className="single-question__answer closed">
            <p>{answer}</p>
          </section>
          </article>
        )}
        </>
    );
}

export default SingleQuestion
