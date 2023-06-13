import './about.scss'

import person from '../../assets/images/img/person.png'




function About() {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__wrapper">
          <div className="about__left">
            <div className="title orange">О нас</div>
            <div className="about__blog">
              <div className="title medium">Давлат Тошев</div>
              <div className="text orange">
                «Если бы в гостинице жили люди, ресторан был бы, ты бы
                зарабатывал», — так многие говорили художнику-миниатюристу
                Давлату Тошеву, когда узнавали, что с таким трудом доставшееся
                ему в аренду полу-развалившееся здание старого караван-сарая в
                центре Бухары он хочет превратить в художественную мастерскую, в
                школу, где он будет – бесплатно! – учить одаренных детей. «А я у
                них спрашивал, — рассказывает Давлат, — что вы передадите своим
                детям, внукам? Вас совесть не мучает?» Жена и та Давлата не
                понимала. Эта реставрация чуть не разрушила гармонию в семье.{" "}
                <br />
                <br />
                Каждая работа Давлата Тошева – это не просто искусные, ювелирно
                выполненные рисунки тонким инструментом на гладкой шелковой
                бумаге. Это история о мире, его познании, о высших силах: «Кто
                бы ты ни был, какая бы религия ни была, ты должен верить в
                бога».
              </div>
            </div>
              <button className="btn yellow">Подробнее</button>       
          </div>
          <div className="about__right">
            <img src={person} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
