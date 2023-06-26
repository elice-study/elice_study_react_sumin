import React from "react";
import styled from "styled-components";

function Movies({ movie, showModal }) {
  const { movieId, posterImageFileName } = movie;

  return (
    <StyledMovies>
      <div className="movie" onClick={showModal}>
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
