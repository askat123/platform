import React from "react";
import "../Home/index.scss";
import img from "../../img/луч.png";
import img1 from "../../img/img1.png";
import img2 from "../../img/img2.png";
import img3 from "../../img/men 1.png";
import img4 from "../../img/img3.png";
import img5 from "../../img/img4.png";
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
              <img src={img} alt="" className="luch"/>
              <div className="hero--img__img1">
                <img src={img1} alt="" className="hero--img__img1--a" />
                <img src={img2} alt="" className="hero--img__img1--b" />
                <img src={img3} alt="" className="hero--img__img1--i" />
                <img src={img4} alt="" className="hero--img__img1--c" />
                <img src={img5} alt="" className="hero--img__img1--d" />
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
