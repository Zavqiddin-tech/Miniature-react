import "./navbar.scss";
import logo from "../../../assets/images/img/logo.png";
import down from "../../../assets/images/icon/down.png";
import search from "../../../assets/images/icon/search.png";
import shop from "../../../assets/images/icon/shop.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav__wrapper">
          <div className="nav__logo">
            <img src={logo} alt="" />
          </div>
          <ul className="nav__lists">
            <li>
              <a href="#">Главный</a>
            </li>
            <li className="nav__down-btn">
              <a href="#">О нас</a>
              <img src={down} alt="" />
            </li>
            <li>
              <a href="#">Миниатюры</a>
            </li>
            <li>
              <a href="#">Магазин</a>
            </li>
            <li>
              <a href="#">Контакты</a>
            </li>
          </ul>
          <div className="nav__right">
            <img className="nav__icon" src={search} alt="" />
            <img className="nav__icon" src={shop} alt="" />
            <button className="nav__btn">Перевод денег</button>
            <div className="nav__down-btn">Рус <img src={down} alt="" /></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
