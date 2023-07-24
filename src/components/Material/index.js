import React from "react";
import "../Material/index.scss";
import book from "../../img/book.png";
import book2 from "../../img/book2.png";
import book3 from "../../img/book3.png";
import evgeni from "../../img/evgeni.png";

const Material = () => {
  return (
    <>
      <section id="material">
        <div className="container">
          <div className="matarial">
            <div className="matarial--book">
              <img src={book} alt="img" />
              <h1>100 материалов</h1>
              <p>
                Только полезная информация, <br />
                никакой воды. Применяйте <br />
                эти знания первыми!
              </p>
            </div>
            <div className="matarial--book">
              <img src={book2} alt="img" />
              <h1>100% эксклюзив</h1>
              <p>
                Курс записан эксклюзивно <br />
                для нашей платформы
              </p>
            </div>
            <div className="matarial--book">
              <img src={book3} alt="img" />
              <h1>В любое время, в любом месте</h1>
              <p>
                Занимайтесь как вам удобно <br />и где угодно, на своем <br />
                мобильном или компьютере
              </p>
            </div>
          </div>
          <div className="block">
            <img src={evgeni} alt="img" />
            <p>Мастер класс ведет</p>
            <h1>Евгений Александрович</h1>
            <h4> Frontend developer</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default Material;
