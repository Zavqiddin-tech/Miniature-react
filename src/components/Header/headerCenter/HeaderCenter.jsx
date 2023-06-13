import "./headercenter.scss";

import miniature from "../../../assets/images/img/miniture-1.png";

function HeaderCenter() {
  return (
    <div className="header__center">
      <div className="container">
        <div className="header__blogs">
          <div className="header__left">
            <img src={miniature} alt="" />
          </div>
          <div className="header__right">
            <div className="title">В присутствии короля</div>
            <div className="text white">
              Lorem ipsum dolor sit amet consectetur. Gravida mollis egestas
              arcu quis scelerisque convallis. Morbi nulla cursus sed tellus
              rhoncus. Tristique convallis in quis sit pellentesque donec turpis
              in. Fringilla vitae ut bibendum semper dolor orci mattis amet. <br /><br />
              Lorem ipsum dolor sit amet consectetur. Gravida mollis egestas
              arcu quis scelerisque convallis. Morbi nulla cursus sed tellus
              rhoncus
            </div>
            <div className="money">4 999 €.</div>
            <div className="btn__groups">
                <button className="btn red">Купить</button>
                <button className="btn white">Подробнее</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderCenter;
