import Carditem from "./carditem";

import "./card.scss";

import card1 from "../../assets/images/img/card1.png";
import card2 from "../../assets/images/img/card2.png";
import card3 from "../../assets/images/img/card3.png";
import card4 from "../../assets/images/img/card4.png";
import card5 from "../../assets/images/img/card5.png";
import card6 from "../../assets/images/img/card6.png";
import card7 from "../../assets/images/img/card7.png";
import card8 from "../../assets/images/img/card8.png";

const Card = () => {
  return (
    <div className="card">
      <div className="container">
        <div className="card__title title orange">миниатюры в продаже</div>
        <div className="card__blogs">
          <div className="col-3 ">
            <Carditem picture={card1} />
          </div>
          <div className="col-3">
            <Carditem picture={card2} />
          </div>
          <div className="col-3">
            <Carditem picture={card3} />
          </div>
          <div className="col-3">
            <Carditem picture={card4} />
          </div>
          <div className="col-3">
            <Carditem picture={card5} />
          </div>
          <div className="col-3">
            <Carditem picture={card6} />
          </div>
          <div className="col-3">
            <Carditem picture={card7} />
          </div>
          <div className="col-3">
            <Carditem picture={card8} />
          </div>
        </div>
        <div className="card__btn">
          <button className="btn red">Посмотреть больше работы (еще 256) </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
