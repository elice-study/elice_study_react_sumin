import React from "react";
import Main from "./pages/Main/Main";
import Modal from "./pages/Modal/Modal";

import { Reset } from "styled-reset";
import styled from "styled-components";

function App() {
  //img data fetch
  // getMovieImg = async () => {
  //   const res = await fetch("./dummy.json");
  //   const data = await res.json();
  //   console.log(data);
  // };

  return (
    <>
      <StyledApp>
        <Reset />
        <Modal />
        <Main />
      </StyledApp>
    </>
  );
}

const StyledApp = styled.div``;

export default App;
