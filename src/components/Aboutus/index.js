import React from "react";
import "./Aboutus.scss";
import img from "../../img/Abaut-img.png";
import img1 from "../../img/Abaut-img1.png";
import Certificate from "../Certificate";
import Feedback from "../Feedback";

const AboutUs = () => {
  return (
    <div id="abaut">
      <div className="container">
        <div className="abaut">
          <div className="abaut--abaut-start">
            <p>
              Главная<span> / О нас</span>
            </p>
          </div>
          <center>
            <div className="abaut--abaut-start__abaut-text">
              <h1>О нас</h1>
              <p>
                Курсы IT-профессий Motion Web была основана в 2021-ом году в
                Бишкеке с целью <br /> дать возможность каждому человеку, даже
                без опыта в технологиях, гарантированно <br /> освоить
                IT-профессию.
              </p>
              <p>
                Форма обучения - онлайн, с применением электронного обучения и
                дистанционных <br /> образовательных технологий на
                образовательной платформе Moodle и прямые эфиры с ,<br />
                преподавателем. 154 академических часа трудоёмкости учебной
                деятельности отведено <br /> практическим занятиям и выполнению
                практических заданий.
              </p>
            </div>
            <div className="abaut--abaut-start__abaut-text--abaut-img">
              <img src={img} alt="" />
              <img src={img1} alt="" />
            </div>
          </center>
        </div>
      </div>
      <Certificate />
      <Feedback />
    </div>
  );
};

export default AboutUs;
