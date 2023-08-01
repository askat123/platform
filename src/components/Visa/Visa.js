import React from "react";
import "./index.scss";
import img from "../../img/visa1.png";
import img1 from "../../img/visa2.png";
import img2 from "../../img/visa3.png";

const Visa = () => {
  return (
    <div id="visa">
        <div className="visa">
            <h1 className="visa--visa-h1">Платежные карты</h1>
          <div className="visa--visa-div">
            <div className="visa--visa-div__visadf">
              <div className="visa--visa-div__visadf--visa1">
                <h3>Visa Classic</h3>
                <div style={{ display: "flex", alignItems: "center" , margin: '18px 0 ' }}>
                  <img style={{marginRight:'10px'}} src={img} alt="" />
                  <img src={img1} alt="" />
                </div>
                <h2>4000 1234 5678 9010</h2>
                <p>12/34</p>
                <img style={{margin:'1px 0 -31px 290px'}} src={img2} alt="" />
              </div> <div className="visa--visa-div__visadf--visa1">
                <h3>Visa Classic</h3>
                <div style={{ display: "flex", alignItems: "center" , margin: '18px 0 ' }}>
                  <img style={{marginRight:'10px'}} src={img} alt="" />
                  <img src={img1} alt="" />
                </div>
                <h2>4000 1234 5678 9010</h2>
                <p>12/34</p>
                <img style={{margin:'1px 0 -31px 290px'}} src={img2} alt="" />
              </div>
            </div>
            <div className="visa--visa-div__visa3">
                <h1>Добавить карту</h1>
                <p>Добавьте свою карту, чтобы больше не тратить время на ввод данных вручну</p>
                <button>Добавить карту</button>
                <p>Для проверки карты будет снята минимальная сумма в размере 1$.  Сумма будет <br /> возвращена вам а течении 48 часов</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Visa;
