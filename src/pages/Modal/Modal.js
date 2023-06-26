import { useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleXmark,
  faHeart,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

function Modal({ closeModal }) {
  return (
    <StyledModalContainer>
      <StyledModal>
        <div className="modal__layout__body">
          <header style={{ backgroundImage: `선택된 무비이미지` }}>
            <div className="header__close" onClick={closeModal}>
              <FontAwesomeIcon
                icon={faCircleXmark}
                size="2xl"
                className="header__close__btn"
              />
            </div>
            <div className="header__row">
              <span className="header__row__title"></span>
              <div className="header__row__heart">
                <FontAwesomeIcon
                  icon={faHeart}
                  size="sm"
                  className="header__row__heartBtn"
                />
                <span className="header__row__heartCount">31</span>
              </div>
            </div>
          </header>

          <main>
            <div className="main__info">
              <div className="main__info__opening">1989</div>
              <div className="main__info__runningTimeMinutes">102분</div>
              <div className="main__info__permissibleAge">ALL</div>
            </div>
            <div className="main__story">
              <span>
                사랑스러운 초보마녀 ‘키키’는 검은 고양이 ‘지지’와 함께 빗자루를
                타고 마녀 수련을 떠난다. 항구 마을에 불시착한 키키는 첫날부터
                우여곡절을 겪지만, ‘배달’에 재능이 있다는 걸 발견하고 본격적인
                마법 수련을 시작하는데…
              </span>
            </div>
            <div className="main__creator">
              <span>감독: </span>
              <span>미야자키 하야오</span>
            </div>
            <div className="main__castMembers">
              <span>출연: </span>
              <span>타카야마 미나미</span>
            </div>
          </main>
          <footer className="modal__layout__footer">
            <div className="footer__row">
              <div className="footer__title">Comments</div>
              <div className="footer__comments__btn">
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
            <div className="footer__underline"></div>
            <div className="footer__comments"></div>
          </footer>
        </div>
      </StyledModal>
    </StyledModalContainer>
  );
}

const StyledModalContainer = styled.div`
  height: 100vh;
  position: absolute;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.7);

  right: 0px;
  left: 0px;
  top: 0px;
`;

const StyledModal = styled.div`
  .modal__layout__body {
    width: 800px;
    margin: 35px auto;

    background-color: #141414;
    color: #fff;
    border-radius: 10px;
  }
  .modal__layout__body > header {
    width: 100%;
    height: 400px;

    background-size: 100% 100%;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
  .header__close {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: flex-end;
  }
  .header__close__btn {
    margin: 30px 15px 0 0;
    cursor: pointer;
  }
  .header__row {
    display: flex;
    justify-content: flex-start;

    margin-top: 250px;
    margin-left: 60px;
  }
  .header__row__title {
    font-size: 50px;
    font-family: "Nanum Myeongjo", serif;
    font-weight: 600;
    font-style: italic;
  }
  .header__row__heart {
    border: solid 1.5px #bcbcbc;
    border-radius: 10px;
    background-color: rgb(20, 20, 20, 0.5);

    width: 60px;
    height: 30px;
    margin-left: 10px;
    margin-top: 20px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .header__row__heartBtn {
    margin-right: 4px;
    scale: 1.1;
    cursor: pointer;
    color: #bcbcbc;
  }
  .header__row__heartBtn:hover {
    will-change: transform;
    animation: heartBeat 1.2s linear infinite;
  }

  @keyframes heartBeat {
    0% {
      color: #bcbcbc;
      transform: none;
    }
    50% {
      color: #fff;
      transform: scale(1.2);
    }
    100% {
      color: #bcbcbc;
      transform: none;
    }
  }

  .modal__layout__body > main {
    box-sizing: border-box;
    margin: 0 20px;
  }
  .main__info {
    display: flex;
    box-sizing: border-box;
    align-items: center;

    margin: 15px 0;
    height: 30px;
    font-size: 20px;
    color: #bcbcbc;
  }
  .main__info__opening {
    margin: 0 12px 0 10px;
  }
  .main__info__permissibleAge {
    background-color: #46d369;
    color: #fff;
    font-weight: 800;
    border-radius: 2px;
    margin: 0 12px;
    padding: 2px;
  }
  .main__story {
    margin: 30px 10px;
    line-height: 22px;
  }
  .main__story span,
  .main__creator span {
    font-size: 16px;
  }
  .main__creator,
  .main__castMembers {
    margin: 5px 10px;
    font-size: 16px;
  }
  .main__creator span:first-child,
  .main__castMembers span:first-child {
    color: #bcbcbc;
  }
  .modal__layout__footer {
    margin: 50px 20px 10px 20px;
  }
  .footer__row {
    display: flex;
  }
  .footer__title {
    font-family: "Nanum Myeongjo", serif;
    font-size: 25px;
    color: #bcbcbc;
  }
  .footer__comments__btn {
    border: solid 1.5px #bcbcbc;
    border-radius: 10px;
    color: #bcbcbc;

    width: 25px;
    height: 25px;
    font-size: 18px;
    margin-left: auto;
    margin-right: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .footer__underline {
    height: 1px;
    background-color: #fff;
    margin: 10px 0;
  }
  .footer__comments {
    height: 50px;
  }
`;

export default Modal;
