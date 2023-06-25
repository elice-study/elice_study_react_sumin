import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <StyledHeader>
      <div className="header">
        <div className="header__title">
          <span>SUMIN CINEMA</span>
        </div>
        <div className="header__search">
          <input type="text" placeholder=" 제목, 사람, 장르..." />
          <button className="header__search__btn">
            <FontAwesomeIcon icon={faMagnifyingGlass} size="2xl" />
          </button>
        </div>
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  .header {
    width: 100%;
    height: 130px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }
  .header__title {
    height: 50px;
    font-size: 35px;
    font-weight: 800;
    display: flex;
    align-items: center;
  }
  .header__search {
    border: solid 1px #fff;
  }
  .header__search input {
    border: none;
    outline: none;
    background-color: #141414;
    opacity: 0.8;
    -webkit-appearance: none;

    width: 250px;
    height: 42px;

    position: relative;
    color: #fff;
  }

  .header__search__btn {
    background: none;
    border: none;
    color: #fff;
  }

  .header__search__btn i {
    /* position: absolute;
      right: 40px;
      top: 100px; */
  }
`;

export default Header;
