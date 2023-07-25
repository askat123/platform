import React from "react";
import "../Frontend/index.scss";
import { Link } from "react-router-dom";
import Front from "../Front";
import Programma from "../Programma";
import Material from "../Material";
import Prosess from "../Prosess";

const Frontend = () => {
  return (
    <>
      <section id="frontend">
        <div className="container">
          <div className="frontend">
            <div className="frontend--block">
              <h3>Главная / Наши курсы / Frontend- разработчик</h3>
              <h1>Frontend-разработчик</h1>
              <p>
                Идея реактивного программирования появилась <br />
                сравнительно недавно, лет 10 назад. Что вызвало <br />
                популярность этого относительно нового подхода и почему <br />
                сейчас он в тренде, рассказал на конференции{" "}
              </p>
              <Link to={"/register"}>
                <button>Купить курс за 46 $ </button>
              </Link>
            </div>
            <div className="frontend--end">
              <h3>Доступ:</h3>
              <h2>Навсегда</h2>
              <h4>В курс входит: </h4>
              <h2>
                3 модулей <br />
                60материалов
              </h2>
            </div>
          </div>
        </div>
      </section>
      <Front />
      <Programma />
      <Material />
      <Prosess />
    </>
  );
};

export default Frontend;
