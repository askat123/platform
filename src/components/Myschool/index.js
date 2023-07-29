import React from "react";
import "../Myschool/index.scss";
import school from "../../img/school.png";
import Kurs from "../Kurs";
import MasterClass from "../MasterClass";
import Level from "../Level";
import Slider from "../Slider";
import Application from "../Application";

const MySchool = () => {
  return (
    <>
      <section id="school">
        <div className="container">
          <div className="school">
            <div>
              <h4><span>Главная /</span> О школе</h4>
              <div className="school--one">
                <h1>О нашей школе:</h1>
                <p>
                  Наша платформа — это интенсивная программа <br />
                  обучения для тех, кто хочет освоить востребованную <br />
                  профессию, войти в IT и зарабатывать больше.
                </p>
              </div>
              <div className="school--two">
                <h1>Наша миссия:</h1>
                <p>
                  Сформировать интерес к современным технологиям <br />и помочь
                  школьнику определиться с выбором <br />
                  будущей специальности.
                </p>
              </div>
            </div>
            <img src={school} alt="" />
          </div>
        </div>
      </section>
      <Kurs />
      <MasterClass />
      <Level />
      <Slider />
      <Application/>
    </>
  );
};

export default MySchool;
