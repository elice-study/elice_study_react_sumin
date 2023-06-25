import React from "react";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <StyledNav>
      <div className="nav">
        <div className="nav__company">
          <span>스튜디오 지브리</span>
          <FontAwesomeIcon icon={faCaretDown} color="black" />
        </div>
        <div className="nav__platform">
          <span>넷플릭스</span>
        </div>
        <div className="nav__platform">
          <span>웨이브</span>
        </div>
        <div className="nav__platform">
          <span>왓챠</span>
        </div>
        <div className="nav__platform">
          <span>티빙</span>
        </div>
      </div>
    </StyledNav>
  );
}

const StyledNav = styled.div`
  .nav {
    width: 100%;
    height: 30px;
    margin: 5px 0;

    display: flex;
    boxsizing: border-box;
  }
  .nav__company {
    margin-right: 5px;
    padding: 5px 10px;
    background: #fff;
    display: flex;
    align-items: center;

    border-radius: 5px;
  }
  .nav__company span {
    display: block;
    margin-right: 10px;
    color: black;
  }
  .nav__company i {
    color: black;
    cursor: pointer;
  }
  .nav__platform {
    margin-right: 5px;
    padding: 5px 10px;
    background: #fff;
    display: flex;
    align-items: center;

    border-radius: 5px;
    opacity: 0.6;
    cursor: pointer;
  }
  .nav__platform span {
    color: black;
    align-items: center;
  }
`;

export default Nav;
