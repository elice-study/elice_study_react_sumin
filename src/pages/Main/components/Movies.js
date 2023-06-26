import React from "react";
import styled from "styled-components";

function Movies({ movie, showModal, clickedMovieInfo }) {
  const { movieId, posterImageFileName } = movie;
  const clickMovie = () => {
    showModal();
    clickedMovieInfo(movieId);
  };

  return (
    <StyledMovies>
      <div className="movie" onClick={clickMovie}>
        <img id={movieId} src={`posterImg/${posterImageFileName}`} alt="" />
      </div>
    </StyledMovies>
  );
}

const StyledMovies = styled.div`
  .movie {
    cursor: pointer;
  }
  .movie img {
    border-radius: 4px;
    max-width: 100%;
    height: auto;
  }
`;

export default Movies;
