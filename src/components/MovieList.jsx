import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie) => (
        <img src={movie.Poster} alt="movie"></img>
      ))}
    </>
  );
};

export default MovieList;
