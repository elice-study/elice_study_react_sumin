import Header from "./components/Header";
import Nav from "./components/Nav";
import Movies from "./components/Movies";
import Modal from "../Modal/Modal";

import styled from "styled-components";

function Main() {
  return (
    <StyledMain>
      <>
        <Header />
        <Nav />
        <Modal />
        <Movies />
      </>
    </StyledMain>
  );
}

const StyledMain = styled.div`
  background-color: #141414;
  color: #fff;
  fontfamily: "Noto Sans KR", sans-serif;
  fontfamily: "Open Sans", sans-serif;
  padding: 35px;
`;

export default Main;
