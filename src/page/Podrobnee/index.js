import React from "react";
import "../Podrobnee/index.scss";
import { AiOutlineCheck } from "react-icons/ai";
import Accardiones from "../Accardiones";

const Podrobnee = () => {
  return (
    <> 
    <section id="podrobnee">
      <div className="container">
        <div className="podrobnee">
          <h4>Главная / Пакет участия</h4>
          <h1>Выберите свой пакет участия</h1>
          <div className="podrobnee--kurs">
            <div className="podrobnee--kurs__block">
              <h3>Месяц +</h3>
              <h2>105,00 $</h2>
              <button className="podrobnee--kurs__block--one">Ежемесячно</button>
              <h5>
                <AiOutlineCheck />
                Все статьи
              </h5>
              <button className="podrobnee--kurs__block--two">
                Оформить подписку
              </button>
            </div>
            <div className="podrobnee--kurs__block">
              <h3>Месяц +</h3>
              <h2>105,00 $</h2>
              <button className="podrobnee--kurs__block--one">Ежемесячно</button>
              <h5>
                <AiOutlineCheck />
                Все статьи
              </h5>
              <h5>
                <AiOutlineCheck />
                Все мастер классы
              </h5>
              <button className="podrobnee--kurs__block--three">
                Оформить подписку
              </button>
            </div>
            <div className="podrobnee--kurs__block">
              <h3>Месяц +</h3>
              <h2>105,00 $</h2>
              <button className="podrobnee--kurs__block--one">Ежемесячно</button>
              <h5>
                <AiOutlineCheck />
                Все статьи
              </h5> 
              <h5>
                <AiOutlineCheck />
                Все мастер классы
              </h5>
              <h5>
                <AiOutlineCheck />
                6 новых статей каждый месяц
              </h5>
              <h5>
                <AiOutlineCheck />
                Доступ к курсу “DevOps - инженер”
              </h5>
              <button className="podrobnee--kurs__block--four">
                Оформить подписку
              </button>
            </div>
          </div>
          <p>Списания будут автоматическими. Вы всегда можете отменить подписку в Вашем личном кабинете и больше списаний не будет</p>
        </div>
      </div>
    </section>
    <Accardiones/>
    </>
  );
};


export default Podrobnee;
