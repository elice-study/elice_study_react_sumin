function Header() {
  return (
    <>
      <div className="header__title">
        <span>SUMIN CINEMA</span>
      </div>
      <div className="header__search">
        <input type="text" placeholder=" 제목, 사람, 장르..." />
        <button className="header__search__btn">
          <i className="fa-solid fa-magnifying-glass fa-2xl"></i>
        </button>
      </div>
    </>
  );
}

export default Header;
