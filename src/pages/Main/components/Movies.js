import React from "react";
import styled from "styled-components";
function Movies({ movie }) {
  const { movieId, posterImageFileName } = movie;
  console.log(posterImageFileName);

  return (
    <StyledMovies>
      <div>
        <img id={movieId} src={`posterImg/${posterImageFileName}`} alt="" />
      </div>
    </StyledMovies>
  );
}

const StyledMovies = styled.div`
  div {
    cursor: pointer;
  }
  div img {
    border-radius: 4px;
    max-width: 100%;
    height: auto;
  }
`;

export default Movies;
