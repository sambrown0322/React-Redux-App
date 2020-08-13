import React, { useState } from "react";

export default function Joke(props) {
  const [answer, setAnswer] = useState(false);
  const revealAnswer = () => {
    setAnswer(!answer);
  };
  return (
    <div key={props.joke.id}>
      <h3>{props.joke.setup}</h3>
      {answer ? <p>{props.joke.punchline}</p> : null}
      <button onClick={revealAnswer}>Answer</button>
    </div>
  );
}
