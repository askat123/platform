import React from "react";
import "./index.scss";
import { LiaClipboardListSolid } from "react-icons/lia";
import logo from "../../img/article1.png";
import { Link } from "react-router-dom";

const Article = () => {
  return (
    <div id="article">
      <div className="container">
        <div className="article">
          <p>
            Главная / <span>Наши курсы</span>
          </p>
          <center>
            <h1>Статьи</h1>
          </center>
          <div className="article--blocks">
            <div className="article--blocks__block">
              <img src={logo} alt="" />
              <span>Статьи</span>
              <h2>
                Мы подготовили подборку самых
                <br /> популярных курсов по направлению
                <br /> Java в IBS Training Center.{" "}
              </h2>
              <div className="article--blocks__block--date">
                <Link to={"/article/weprep"}>
                  <p1>
                    <LiaClipboardListSolid />
                    Читать
                  </p1>
                </Link>
                <p2>01.02.2022</p2>
              </div>
            </div>

            <div className="article--blocks__block">
              <img src={logo} alt="" />
              <span>Статьи</span>
              <h2>
                Мы подготовили подборку самых
                <br /> популярных курсов по направлению
                <br /> Java в IBS Training Center.{" "}
              </h2>
              <div className="article--blocks__block--date">
                <p1>
                  <LiaClipboardListSolid /> Читать
                </p1>
                <p2>01.02.2022</p2>
              </div>
            </div>

            <div className="article--blocks__block">
              <img src={logo} alt="" />
              <span>Статьи</span>
              <h2>
                Мы подготовили подборку самых
                <br /> популярных курсов по направлению
                <br /> Java в IBS Training Center.{" "}
              </h2>
              <div className="article--blocks__block--date">
                <p1>
                  <LiaClipboardListSolid /> Читать
                </p1>
                <p2>01.02.2022</p2>
              </div>
            </div>

            <div className="article--blocks__block">
              <img src={logo} alt="" />
              <span>Статьи</span>
              <h2>
                Мы подготовили подборку самых
                <br /> популярных курсов по направлению
                <br /> Java в IBS Training Center.{" "}
              </h2>
              <div className="article--blocks__block--date">
                <p1>
                  <LiaClipboardListSolid /> Читать
                </p1>
                <p2>01.02.2022</p2>
              </div>
            </div>

            <div className="article--blocks__block">
              <img src={logo} alt="" />
              <span>Статьи</span>
              <h2>
                Мы подготовили подборку самых
                <br /> популярных курсов по направлению
                <br /> Java в IBS Training Center.{" "}
              </h2>
              <div className="article--blocks__block--date">
                <p1>
                  <LiaClipboardListSolid /> Читать
                </p1>
                <p2>01.02.2022</p2>
              </div>
            </div>

            <div className="article--blocks__block">
              <img src={logo} alt="" />
              <span>Статьи</span>
              <h2>
                Мы подготовили подборку самых
                <br /> популярных курсов по направлению
                <br /> Java в IBS Training Center.{" "}
              </h2>
              <div className="article--blocks__block--date">
                <p1>
                  <LiaClipboardListSolid /> Читать
                </p1>
                <p2>01.02.2022</p2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
