import React, { useState } from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 20%;
  margin-bottom: 2%;
  border: 2px solid black;
  box-shadow: 5px 5px 5px grey;
`;

export default function Joke(props) {
  const [answer, setAnswer] = useState(false);
  const revealAnswer = () => {
    setAnswer(!answer);
  };
  return (
    <Card onClick={revealAnswer} key={props.joke.id}>
      <h3>{props.joke.setup}</h3>
      {answer ? (
        <p>{props.joke.punchline}</p>
      ) : // <button className="cursor" onClick={revealAnswer}>
      //   Answer
      // </button>
      null}
    </Card>
  );
}
