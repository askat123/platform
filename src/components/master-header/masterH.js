import React from "react";
import "./index.scss";

const MasterH = () => {
  const scrool = () => {
    window.scrollTo(0, 1600);
  };
  return (
    <div id="masterH">
      <div className="container">
        <div className="masterH">
          <p className="masterH--p">Что, как и почему</p>
          <div className="masterH--text">
            <div>
              <div className="masterH--text__masterH-text">
                <h1>О МАСТЕР-КЛАССЕ</h1>
                <p>
                  В режиме мастер-класса он продемонстрировал, почему так важен{" "}
                  <br /> неблокирующий ввод-вывод, в чем минусы классической{" "}
                  <br /> многопоточности, в каких ситуациях нужна реактивность,
                  и что она <br /> может дать. А еще описал недостатки
                  реактивного подхода.{" "}
                </p>
              </div>
              <div className="masterH--text__masterH-text1">
                <h4>Переходите к видеоурокам, что бы научится: </h4>
                <li>Чтению файла (blocked on reading file);</li>
                <li>
                  Что бы научиться базе данных (blocked on reading from DB);
                </li>
                <li>
                  Научится использовать в сложных вычислениях (blocked on heavy
                  calculations);
                </li>
                <li>
                  На ответе от клиента (blocked on responding the client).
                </li>
              </div>
              <div className="masterH--text__masterH-text3">
                <button className="masterH--text__masterH-text3--btn">
                  Купить мастер-класс{" "}
                </button>
                <button
                  onClick={() => {
                    scrool();
                  }}
                  className="masterH--text__masterH-text3--btn1"
                >
                  Смотреть программу{" "}
                </button>
              </div>
            </div>
            <div className="masterH--text__masterH-p">
              <p>Доступ: </p>
              <h5 style={{ marginBottom: "60px" }}>6 недель</h5>
              <p>В мастер-класс входит: </p>
              <h5>5 уроков</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterH;
