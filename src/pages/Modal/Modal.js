import { useState } from "react";
import styles from "./Modal.module.css";

function Modal({}) {
  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(!openModal);
  };

  if (!openModal) return null;
  return (
    <div className="styles.modal__layout__body">
      <header>
        <div className="header__close">
          <i className="fa-sharp fa-solid fa-circle-xmark fa-2xl"></i>
        </div>
        <div className="header__row">
          <span className="header__row__title"></span>
          <div className="header__row__heart">
            <i className="fa-regular fa-heart fa-sm"></i>
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
            사랑스러운 초보마녀 ‘키키’는 검은 고양이 ‘지지’와 함께 빗자루를 타고
            마녀 수련을 떠난다. 항구 마을에 불시착한 키키는 첫날부터 우여곡절을
            겪지만, ‘배달’에 재능이 있다는 걸 발견하고 본격적인 마법 수련을
            시작하는데…
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
      <footer>
        <div className="footer__row">
          <div className="footer__title">Comments</div>
          <div className="footer__comments__btn">
            <i className="fa-solid fa-plus"></i>
          </div>
        </div>
        <div className="footer__underline"></div>
        <div className="footer__comments"></div>
      </footer>
      <script
        src="https://kit.fontawesome.com/6d5788fdc0.js"
        crossorigin="anonymous"
      ></script>
      <script src="main.js"></script>
    </div>
  );
}

export default Modal;
