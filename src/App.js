import React from "react";
import Main from "./pages/Main/Main";
import Modal from "./pages/Modal/Modal";

import { Reset } from "styled-reset";
import styled from "styled-components";

function App() {
  return (
    <>
      <StyledApp>
        <Reset />
        <Main />
      </StyledApp>
    </>
  );
}

const StyledApp = styled.div``;

export default App;
