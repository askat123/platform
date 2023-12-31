import React from "react";
import "./index.scss";
import { AiOutlineCheck } from "react-icons/ai";
import Application from "../../components/Application";
import QuestionEnd from "../../components/QuestionEnd";

const Package = () => {
  return (
    <div id="package">
      <div className="container">
        <div className="package">
          <p>
            Главная / <span>Пакет участия</span>
          </p>
          <center>
            <h1
              style={{
                padding: "50px 0",
              }}
            >
              Выберите свой пакет участия
            </h1>
          </center>
          <div className="package--blocks">
            <div className="package--blocks__block">
              <div>
                <h5>Месяц +</h5>
                <h1>105,00 $</h1>
                <h6>Ежемесячно</h6>
                <p>
                  <AiOutlineCheck /> Все статьи
                </p>
              </div>
              <button>Оформить подписку</button>
            </div>
            <div className="package--blocks__block">
              <div>
                <h5>Год</h5>
                <h1>220,00 $</h1>
                <h6>Ежегодно</h6>
                <p>
                  <AiOutlineCheck /> Все статьи
                </p>
                <p>
                  <AiOutlineCheck /> Все мастер классы
                </p>
              </div>
              <button>Оформить подписку</button>
            </div>
            <div className="package--blocks__block">
              <div>
                <h5>Год +</h5>
                <h1>585,00 $</h1>
                <h6>Ежегодно</h6>
                <p>
                  <AiOutlineCheck /> Все статьи
                </p>
                <p>
                  <AiOutlineCheck /> Все мастер классы
                </p>
                <p>
                  <AiOutlineCheck /> 6 новых статей каждый месяц
                </p>
                <p>
                  <AiOutlineCheck /> Доступ к курсу “DevOps - инженер”
                </p>
              </div>
              <button>Оформить подписку</button>
            </div>
          </div>
              <center>
              <p style={{
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Montserrat",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "normal",
                width: "852px",
                textAlign: "center",
                padding:"50px 0"
              }}>
                Списания будут автоматическими. Вы всегда можете отменить
                подписку в Вашем личном кабинете и больше списаний не будет
              </p>
              </center>
        </div>
      </div>
      <Application/>
      <QuestionEnd/>
    </div>
  );
};

export default Package;
