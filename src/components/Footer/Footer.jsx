import "./footer.scss";
import Footercontact from "./footerContact/Footercontact";
import Footertop from "./footerTop/Footertop";

import viento from "../../assets/images/img/vient-logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Footertop />
        <Footercontact />
      </div>
      <div className="footer__bottom">
          <div className="container">
            <div className="footer__bottom-left">
              © 2023 Все права защищены. OOO “Viento group”
            </div>
            <div className="footer__bottom-right">
              <div className="footer__bottom-text">Разработка сайта:</div>
              <img src={viento} alt="" />
            </div>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
