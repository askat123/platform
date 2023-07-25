import React from "react";
import "../Programma/index.scss";
import programma from "../../img/programma.png";

const Programma = () => {
  return (
    <section id="programma">
      <div className="container">
        <h1>ПРОГРАММА КУРСА</h1>
        <div className="programma">
          <div className="programma--one">
            <div className="programma--one__block">
              <h2>Модуль 1</h2>
              <h3>Reactivity</h3>
            </div>
            <div className="programma--one__block">
              <h2>Модуль 2</h2>
              <h4>Reactive approach</h4>
            </div>
            <div className="programma--one__block">
              <h2>Модуль 3</h2>
              <h5>Observable example</h5>
            </div>
            <div className="programma--one__block">
              <h2>Модуль 4</h2>
              <p>Implementing and subscribing to an observer</p>
            </div>
            <div className="programma--one__block">
              <h2>Модуль 5</h2>
              <h6>Reactive Streams spec</h6>
            </div>
            <div className="programma--one__block">
              <h2>Модуль 6</h2>
              <h6>Reactive Streams spec</h6>
            </div>
          </div>
          <div>
            <img src={programma} alt="img" />
          </div>
        </div>
        <button>Зарегистрироваться</button>
      </div>
    </section>
  );
};

export default Programma;
