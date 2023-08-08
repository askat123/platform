import React from "react";
import "../Home/index.scss";
import luch from "../../img/луч.png";
import ten from "../../img/ten.png";
import setting from "../../img/img1.png";
import ka from "../../img/img2.png";
import lump from "../../img/men 1.png";
import boss from "../../img/img3.png";
import men from "../../img/img4.png";
import Latest from "../Latest";
import Subscribe from "../Subscribe";
import Application from "../Application";
import QuestionEnd from "../QuestionEnd";

const Home = () => {
  return (
    <>
      <div id="hero">
        <div className="container">
          <div className="hero">
            <div className="hero--text">
              <h1>
                IT образовательная <br /> платформа{" "}
              </h1>
              <p>
                Наша образовательная платформа вам <br /> даст необходимые
                практические <br /> знания для адаптации в IT-сфере.
              </p>
            </div>
            <div className="hero--img">
              <div className="hero--img__img1">
                <img src={ten} alt="" className="hero--img__img1--t"/>
              <img src={luch} alt="" className="hero--img__img1--l"/>
                <img src={setting} alt="" className="hero--img__img1--a" />
                <img src={ka} alt="" className="hero--img__img1--b" />
                <img src={lump} alt="" className="hero--img__img1--i" />
                <img src={boss} alt="" className="hero--img__img1--c" />
                <img src={men} alt="" className="hero--img__img1--d" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Latest/>
      <Subscribe/>
      <QuestionEnd/>
    <Application/>
    </>
  );
};

export default Home;
