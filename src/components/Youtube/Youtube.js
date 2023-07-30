import React, { useState } from "react";
import "./index.scss";
import img from "../../img/#block1.png";
import { BiChevronRight , BiChevronLeft } from "react-icons/bi";
import YoutubeH from "../YoutubeH";
import YoutubeF from "../YoutubeF/YoutubeF";

// import Foouter from "../foouter/Foouter";


const Youtube = () => {
  const [youtube, setYoutube] = useState(1);
  return (
    <div id="block">
      <div className="container">
        <div className="block">
          <div className="block--block-text">
            <div className="block--block-text__div">
              <h1>Reactivity</h1>
              <p>
                Когда нужно переходить от прокачивания личной <br />
                эффективности к изучению эффективности командой?
              </p>
            </div>
            <div className="block--block-text__div1">
              <img src={img} alt="" />
              <div>
                <h2>Евгений Александрович</h2>
                <p>Frontend developer</p>
              </div>
            </div>
          </div>
          <div className="block--block-text1">
            <div>
              <div
                style={{ display: youtube === 1 ? "block" : "none" }}
                className="a1"
              >
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/k35Jt-VnzO8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div
                style={{ display: youtube === 2 ? "block" : "none" }}
                className="a1"
              >
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/gb7gMluAeao"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div
                style={{ display: youtube === 3 ? "block" : "none" }}
                className="a1"
              >
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/GNrdg3PzpJQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>{" "}
              <div
                style={{ display: youtube === 4 ? "block" : "none" }}
                className="a1"
              >
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/aF5_niKPL6c"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
              <div
                style={{ display: youtube === 5 ? "block" : "none" }}
                className="a1"
              >
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/P9IXQe_TKCI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>{" "}
              <div
                style={{ display: youtube === 6 ? "block" : "none" }}
                className="a1"
              >
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/3aGSqasVPsI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="block--block-text1__block-youtube">
              <div
                onClick={() => setYoutube(1)}
                className="block--block-text1__block-youtube--block-lol"
              >
                <div className="block--block-text1__block-youtube--block-lol__lol">
                <iframe
                  width="100"
                  height="60"
                  src="https://www.youtube.com/embed/k35Jt-VnzO8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                  <div>
                    <h1>1 Reactivity</h1>
                    <p>Урок</p>
                  </div>
                </div>
                
              </div>{" "}
              <div
                onClick={() => setYoutube(2)}
                className="block--block-text1__block-youtube--block-lol"
              >
                <div className="block--block-text1__block-youtube--block-lol__lol">
                <iframe
                  width="100"
                  height="60"
                  src="https://www.youtube.com/embed/gb7gMluAeao"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                  <div>
                    <h1>2 Reactivity</h1>
                    <p>Урок</p>
                  </div>
                </div>
              </div>{" "}
              <div
                onClick={() => setYoutube(3)}
                className="block--block-text1__block-youtube--block-lol"
              >
                <div className="block--block-text1__block-youtube--block-lol__lol">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/GNrdg3PzpJQ"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                  <div>
                    <h1>3 Reactivity</h1>
                    <p>Урок</p>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setYoutube(4)}
                className="block--block-text1__block-youtube--block-lol"
              >
                <div className="block--block-text1__block-youtube--block-lol__lol">
                <iframe
                  width="100px"
                  height="60px"
                  src="https://www.youtube.com/embed/P9IXQe_TKCI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                  <div>
                    <h1>1 Reactivity</h1>
                    <p>Урок</p>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setYoutube(5)}
                className="block--block-text1__block-youtube--block-lol"
              >
                <div className="block--block-text1__block-youtube--block-lol__lol">
                <iframe
                  width="100px"
                  height="60px"
                  src="https://www.youtube.com/embed/P9IXQe_TKCI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                  <div>
                    <h1>1 Reactivity</h1>
                    <p>Урок</p>
                  </div>
                </div>
              </div>
              <div
                onClick={() => setYoutube(6)}
                className="block--block-text1__block-youtube--block-lol"
              >
                <div className="block--block-text1__block-youtube--block-lol__lol">
                <iframe
                  width="100px"
                  height="60px"
                  src="https://www.youtube.com/embed/3aGSqasVPsI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
                  <div>
                    <h1>1 Reactivity</h1>
                    <p>Урок</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
            <div className="block--btn">
                <button  onClick={() => {
                  if(youtube === 1){
                    setYoutube(1)
                  }else{
                    setYoutube(youtube - 1)
                  } 
                }} style={{
                  color:youtube === 1 ? "#A5A5A5" : "#000",
                  cursor:youtube === 1 ? '' : "pointer"
                  
                  }} className="block--btn__btn1"><BiChevronLeft className="block--btn__btn1--icon"/>Предыдущий урок </button>
                <button  onClick={() => {
                  if (youtube === 6){
                    setYoutube(6)
                  }else{
                    setYoutube(youtube + 1)
                  }
                }}  className="block--btn__btn2"> Следующий урок <BiChevronRight className="block--btn__btn2--icon1"/> </button>
            </div>

        </div>
      </div>
      <YoutubeH/>
    <YoutubeF/>
    
    </div>
    
   
    
  );
};

export default Youtube;