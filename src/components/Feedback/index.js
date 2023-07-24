import React from "react";
import "./Feedback.scss";
import img from "../../img/feedback-img.png";
import img1 from "../../img/img.png"



const Feedback = () => {
  return (
    <div id="feedback">
      <div className="container">
        <div className="feedback">
          <center>
            <h1>Отзывы наших студентов</h1>
          </center>

          <div className="feedback--feedback-start">
            <div className="feedback--feedback-start__slider">
              <center>
                <img src={img} alt="" />
              </center>
              <div className="feedback--feedback-start__slider--lol">
                <center>
                  <h2>Виктор Александарович</h2>
                </center>
                <center>
                  <p>
                    С радостью оставляю положительной отзыв! Пройдя курс "UX/UI
                    Designer с нуля" я с остался полностью доволен, что мой
                    выбор пал именно на данную школу. Если вы выберите данную
                    школу - вам обеспечена прокачка в выбранной вами области.
                    Всячески рекомендую и благодарю!
                  </p>
                </center>
              </div>

              <h3>23.02.2022 г</h3>
            </div>
            <div className="feedback--feedback-start__slider">
              <center>
                <img src={img1} alt="" />
              </center>
              <div className="feedback--feedback-start__slider--lol">
                <center>
                  <h2>Алина Татьянован</h2>
                </center>
                <center>
                  <p>
                    Лучшая школа в галактике и место, где я полюбил мир IT !!! Я
                    вот-вот стану выпускником Motion Web. За это время мне дали
                    фундаментальные знания программирования ( C++, C#, Python ),
                    дискретной математики, криптографии, созданию сайтов со
                    сложной серверной архитектурой.
                  </p>
                </center>
              </div>

              <h3>23.02.2022 г</h3>
            </div>
            <div className="feedback--feedback-start__slider">
              <center>
                <img src={img} alt="" />
              </center>
              <div className="feedback--feedback-start__slider--lol">
                <center>
                  <h2>Виктор Александарович</h2>
                </center>
                <center>
                  <p>
                    С радостью оставляю положительной отзыв! Пройдя курс "UX/UI
                    Designer с нуля" я с остался полностью доволен, что мой
                    выбор пал именно на данную школу. Если вы выберите данную
                    школу - вам обеспечена прокачка в выбранной вами области.
                    Всячески рекомендую и благодарю!
                  </p>
                </center>
              </div>

              <h3>23.02.2022 г</h3>
            </div>{" "}
            <div className="feedback--feedback-start__slider">
              <center>
                <img src={img1} alt="" />
              </center>
              <div className="feedback--feedback-start__slider--lol">
                <center>
                  <h2>Алина Татьянован</h2>
                </center>
                <center>
                  <p>
                  Лучшая школа в галактике и место, где я полюбил мир IT !!! Я
                    вот-вот стану выпускником Motion Web. За это время мне дали
                    фундаментальные знания программирования ( C++, C#, Python ),
                    дискретной математики, криптографии, созданию сайтов со
                    сложной серверной архитектурой.
                  </p>
                </center>
              </div>

              <h3>23.02.2022 г</h3>
            </div>{" "}
            <div className="feedback--feedback-start__slider">
              <center>
                <img src={img} alt="" />
              </center>
              <div className="feedback--feedback-start__slider--lol">
                <center>
                  <h2>Виктор Александарович</h2>
                </center>
                <center>
                  <p>
                    С радостью оставляю положительной отзыв! Пройдя курс "UX/UI
                    Designer с нуля" я с остался полностью доволен, что мой
                    выбор пал именно на данную школу. Если вы выберите данную
                    школу - вам обеспечена прокачка в выбранной вами области.
                    Всячески рекомендую и благодарю!
                  </p>
                </center>
              </div>

              <h3>23.02.2022 г</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
