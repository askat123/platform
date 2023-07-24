import React from "react";
import "./index.scss";
import { LiaClipboardListSolid } from "react-icons/lia";


const OtherArt = () => {
  return (
    <div id="otherart">
      <div className="container">
        <div className="otherart">
          <div className="otherart--blocs">
            <span>Статьи</span>
            <p>
              Мы подготовили подборку самых популярных курсов по направлению
              Java в IBS Training Center.
            </p>
            <div className="otherart--blocs__more">
              <p>
                <LiaClipboardListSolid /> Читать
              </p>
              <p>21.09.2022</p>
            </div>
          </div>
          <div className="otherart--blocs">
            <span>Статьи</span>
            <p>
              Мы подготовили подборку самых популярных курсов по направлению
              Java в IBS Training Center.
            </p>
            <div className="otherart--blocs__more">
              <p>
                <LiaClipboardListSolid /> Читать
              </p>
              <p>21.09.2022</p>
            </div>
          </div>
          <div className="otherart--blocs">
            <span>Статьи</span>
            <p>
              Мы подготовили подборку самых популярных курсов по направлению
              Java в IBS Training Center.
            </p>
            <div className="otherart--blocs__more">
              <p>
                <LiaClipboardListSolid /> Читать
              </p>
              <p>21.09.2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherArt;
