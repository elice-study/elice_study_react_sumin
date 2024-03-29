import Header from "./components/Header";
import Nav from "./components/Nav";
import Movies from "./components/Movies";
import Modal from "../Modal/Modal";

import styled from "styled-components";

import dummy from "../../data/dummy.json";
import { useState } from "react";

function Main() {
  const movies = dummy;
  const [movieInfo, setMoviedInfo] = useState();

  const [openModal, setOpenModal] = useState(false);
  const showModal = () => {
    setOpenModal(true);
    window.scrollTo({ top: 0 });
    //모달 오픈시 내부스크롤은 가능하고 외부는 막도록 하는 방법,,(추후 추가..)
    // document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setOpenModal(false);
    // document.body.style.overflow = "unset";
  };
  const clickedMovieInfo = (movieId) => {
    setMoviedInfo(movies[movieId - 1]);
  };

  return (
    <StyledMainContainer>
      <StyledMain>
        {openModal && (
          <Modal
            className="modal"
            closeModal={closeModal}
            movieInfo={movieInfo}
          />
        )}
        <Header />
        <Nav />
        <div className="movies">
          {movies.map((movieObj) => {
            return (
              <Movies
                key={movieObj.movieId}
                movie={movieObj}
                showModal={showModal}
                clickedMovieInfo={clickedMovieInfo}
              />
            );
          })}
        </div>
      </StyledMain>
    </StyledMainContainer>
  );
}

const StyledMainContainer = styled.div`
  background-color: #141414;
  color: #fff;
  fontfamily: "Noto Sans KR", sans-serif;
  fontfamily: "Open Sans", sans-serif;
  padding: 35px;
`;

const StyledMain = styled.div`
  .movies {
    width: 100%;
    display: grid;

    grid-template-columns: repeat(4, 1fr);
    gap: 50px 5px;
    place-items: center;
    /* box-sizing: border-box; */
    /* border: 1px solid red; */
  }
  // media query
  @media (max-width: 1199px) {
    .movies {
      grid-template-columns: repeat(4, 1fr);
      width: 100%;
    }
  }
  @media (max-width: 991px) {
    .movies {
      grid-template-columns: repeat(3, 1fr);
      width: 100%;
    }
  }
  @media (max-width: 767px) {
    .movies {
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
    }
  }
  @media (max-width: 575px) {
    .movies {
      grid-template-columns: repeat(1, 1fr);
      width: 100%;
    }
  }
`;

export default Main;
