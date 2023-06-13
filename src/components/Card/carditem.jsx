import shop from '../../assets/images/icon/f-shop.png'

function Carditem({picture}) {
  return (
    <div className="card__item">
        <div className="card__img">
            <img src={picture} alt="" />
        </div>
        <div className="card__body">
            <div className="card__text">В присутствии короля</div>
            <div className="card__money">4 999 €.</div>
            <div className="card__footer">
                <button className="footer__btn">Подробнее</button>
                <div className="card__icon">
                    <img src={shop} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Carditem