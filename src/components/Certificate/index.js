import React from "react";
import "./certificate.scss";
import img from "../../img/certificate-img.png";

const Certificate = () => {
  return (
    <div id="certificate">
      <div className="containet">
        <div className="certificate">
          <center>
            <h1>Сертификат</h1>
          </center>
          <center>
            <p>По окончании обучения выдается онлайн сертификат.</p>
          </center>
          <center>
            <img src={img} alt="" />
          </center>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
