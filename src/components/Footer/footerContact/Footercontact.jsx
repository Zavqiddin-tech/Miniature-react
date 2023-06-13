import icon1 from "../../../assets/images/icon/telegram.png";
import icon2 from "../../../assets/images/icon/facebook.png";
import icon3 from "../../../assets/images/icon/instagram.png";
import icon4 from "../../../assets/images/icon/twitter.png";
import icon5 from "../../../assets/images/icon/whatsapp.png";
import icon6 from "../../../assets/images/icon/youtube.png";

function Footercontact() {
  return (
    <div className="footer__contact">
      <div className="col-4">
        <div className="footer__box">
          <div className="footer__title">
            <span>m</span>iniature.uz
          </div>
          <div className="footer__text">
            Lorem ipsum dolor sit amet consectetur. Gravida mollis egestas arcu
            quis scelerisque convallis. <br />
            <br />
            Lorem ipsum dolor sit amet consectetur. Gravida mollis egestas arcu
            quis scelerisque convallis. Lorem ipsum dolor sit amet consectetur.
          </div>
          <div className="footer__icons">
            <div className="footer__icon">
              <div className="footer__icon-box">
                <img src={icon1} alt="" />
              </div>
            </div>
            <div className="footer__icon">
              <div className="footer__icon-box">
                <img src={icon2} alt="" />
              </div>
            </div>
            <div className="footer__icon">
              <div className="footer__icon-box">
                <img src={icon3} alt="" />
              </div>
            </div>
            <div className="footer__icon">
              <div className="footer__icon-box">
                <img src={icon4} alt="" />
              </div>
            </div>
            <div className="footer__icon">
              <div className="footer__icon-box">
                <img src={icon5} alt="" />
              </div>
            </div>
            <div className="footer__icon">
              <div className="footer__icon-box">
                <img src={icon6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="footer__box">
          <div className="footer__title">
            <span>A</span>дрес
          </div>
          <div className="footer__text">
            Lorem ipsum dolor sit amet consectetur. Gravida mollis egestas arcu
            quis scelerisque convallis.
          </div>
          <div className="footer__title tell">
            <span>T</span>елефон
          </div>
          <div className="footer__tell">
            +998 90 168 03 44 <br />
            <br /> +998 90 168 03 44
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="footer__box">
          <div className="footer__title">
            <span>C</span>вязаться с нами
          </div>
          <form className="footer__form">
            <div>
                <input type="email" placeholder="E-mail" required/>
            </div>
            <div>
                <textarea placeholder="Сообщение"></textarea>
            </div>
            <button className="footer__btn btn red">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footercontact;
