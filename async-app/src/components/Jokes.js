import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchJokes } from "../actions/jokeActions";
import Joke from "./Joke";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function Jokes(props) {
  useEffect(() => {
    props.fetchJokes();
  }, []);

  return (
    <div>
      <h1>The best jokes you'll ever hear!</h1>
      {props.isLoading ? <h4>Finding the BEST jokes...</h4> : null}
      {props.error ? <p>Couldn't find any good jokes... </p> : null}
      {props.jokes.length > 0 ? (
        <Flex>
          {props.jokes.map((joke) => {
            return <Joke joke={joke} />;
          })}
        </Flex>
      ) : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    jokes: state.jokes,
    isLoading: state.isLoading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchJokes })(Jokes);
