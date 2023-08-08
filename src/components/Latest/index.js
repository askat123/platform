import React from "react";
import { LiaClipboardListSolid } from "react-icons/lia";
import "./index.scss";
import logo from "../../img/article1.png";
import { Link } from "react-router-dom";

const Latest = () => {
  return (
    <div id="latest">
      <div className="container">
        <div className="latest">
          <h1>Последние статьи</h1>
          <div className="latest--blocks">
                <Link to={"/article/weprep"}>
            <div className="latest--blocks__block">
              <img src={logo} alt="" />
              <span>Статьи</span>
              <h2>
                Мы подготовили подборку самых
                <br /> популярных курсов по направлению
                <br /> Java в IBS Training Center.{" "}
              </h2>
              <div className="latest--blocks__block--date">
                  <p1>
                    <LiaClipboardListSolid className="ion-icon"/>
                    Читать
                  </p1>
                <p2>01.02.2022</p2>
              </div>
            </div>
                </Link><Link to={"/article/weprep"}>
            <div className="latest--blocks__block">
              <img src={logo} alt="" />
              <span>Статьи</span>
              <h2>
                Мы подготовили подборку самых
                <br /> популярных курсов по направлению
                <br /> Java в IBS Training Center.{" "}
              </h2>
              <div className="latest--blocks__block--date">
                  <p1>
                    <LiaClipboardListSolid className="ion-icon"/>
                    Читать
                  </p1>
                <p2>01.02.2022</p2>
              </div>
            </div>
                </Link><Link to={"/article/weprep"}>
            <div className="latest--blocks__block">
              <img src={logo} alt="" />
              <span>Статьи</span>
              <h2>
                Мы подготовили подборку самых
                <br /> популярных курсов по направлению
                <br /> Java в IBS Training Center.{" "}
              </h2>
              <div className="latest--blocks__block--date">
                  <p1>
                    <LiaClipboardListSolid className="ion-icon"/>
                    Читать
                  </p1>
                <p2>01.02.2022</p2>
              </div>
            </div>
                </Link><Link to={"/article/weprep"}>
            <div className="latest--blocks__block">
              <img src={logo} alt="" />
              <span>Статьи</span>
              <h2>
                Мы подготовили подборку самых
                <br /> популярных курсов по направлению
                <br /> Java в IBS Training Center.{" "}
              </h2>
              <div className="latest--blocks__block--date">
                  <p1>
                    <LiaClipboardListSolid className="ion-icon"/>
                    Читать
                  </p1>
                <p2>01.02.2022</p2>
              </div>
            </div>
                </Link><Link to={"/article/weprep"}>
            <div className="latest--blocks__block">
              <img src={logo} alt="" />
              <span>Статьи</span>
              <h2>
                Мы подготовили подборку самых
                <br /> популярных курсов по направлению
                <br /> Java в IBS Training Center.{" "}
              </h2>
              <div className="latest--blocks__block--date">
                  <p1>
                    <LiaClipboardListSolid className="ion-icon"/>
                    Читать
                  </p1>
                <p2>01.02.2022</p2>
              </div>
            </div>
                </Link><Link to={"/article/weprep"}>
            <div className="latest--blocks__block">
              <img src={logo} alt="" />
              <span>Статьи</span>
              <h2>
                Мы подготовили подборку самых
                <br /> популярных курсов по направлению
                <br /> Java в IBS Training Center.{" "}
              </h2>
              <div className="latest--blocks__block--date">
                  <p1>
                    <LiaClipboardListSolid className="ion-icon"/>
                    Читать
                  </p1>
                <p2>01.02.2022</p2>
              </div>
            </div>
                </Link>
          </div>
          <center style={{marginRight: "20px"}}>
            <Link className="a" to={"/article"}>Показать больше</Link>
          </center>
        </div>
      </div>
    </div>
  );
};

export default Latest;
