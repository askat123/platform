import React from "react";
import weprep from "../../img/Rectangle 2184.png";
import "./index.scss";
import Full from "../../components/Full";
import Insigne from "../../components/Insigne";
import OtherArt from "../../components/OtherArt";


const WePrep = () => {
  return (
    <>
      <div id="weprep">
        <div className="container">
          <div className="weprep">
            <p>
              Главная / <span>Статья / Мы подготовили... </span>
            </p>
            <p>11.09.2022</p>
            <div className="weprep--title">
              <h1>
                Мы подготовили подборку самых популярных курсов по направлению
                Java в IBS Training Center.
              </h1>
              <p>
                Когда-то ни один крупный проект не обходился без применения
                функционального и асинхронного программирования. Эти подходы до
                сих пор популярны за счет своих преимуществ: они помогают
                выдерживать большие нагрузки и писать эффективный код, не теряя
                в скорости разработки.{" "}
              </p>
              <img src={weprep} alt="" />
              <p>
                В рамках курса от IBS Training Center вы поймете, как работают
                основные фичи Spring Framework 5, и узнаете:
              </p>
              <li>Какие существуют конфигурации для Spring Framework 5;</li>
              <li>
                Как работать с REST-сервисами и документацией при помощи
                Swagger.
              </li>
              <li>Что такое бины и как с ними работать;</li>
              <li>Что такое Концепция IoC;</li>
              <li>Примеры использования AOP;</li>
            </div>
          </div>
        </div>
      <Full/>
      <Insigne/>
      <OtherArt/>
      </div>
    </>
  );
};

export default WePrep;
