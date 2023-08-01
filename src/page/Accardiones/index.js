import React, { useState } from "react";
import "../Accardiones/index.scss";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Accardiones = () => {
  const [value, setValue] = useState(false);
  const [value1, setValue1] = useState(false);
  const [value2, setValue2] = useState(false);

  return (
    <section id="accardion">
      <div className="container">
        <div className="accordion">
          <div className="accordion__left">
            <h3>FAQ</h3>
            <h2>Остались вопросы?</h2>
            <div className="accordion__left--one">
              <div
                onClick={() => {
                  setValue(!value);
                  setValue1(false);
                  setValue2(false);
                }}
                className="hero-text">
                <div>
                  <div className="accordion__left--one--task">
                    <h1>Как мне начать обучение ?</h1>
                    <div className="">
                      {value ? (
                        <span className="">
                          <BiChevronUp className={"icon"} />
                        </span>
                      ) : (
                        <span className="">
                          <BiChevronDown />
                        </span>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div
                    style={{
                      height: value ? "135px" : "0",
                      overflow: "hidden",
                    }}>
                    <p>
                      Очень просто – зарегистрироваться. Это займет всего
                      несколько минут. Создайте свой аккаунт с помощью адреса
                      электронной почты и номера телефона. Мастер-класс станет
                      доступен сразу после оплаты или в день запуска.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion__left--one">
              <div
                onClick={() => {
                  setValue1(!value1);
                  setValue(false);
                  setValue2(false);
                }}
                className="hero-text"
              >
                <div>
                  <div className="accordion__left--one--task">
                    <h1>Могу ли я отказаться от автопродления подписки</h1>

                    {value1 ? (
                      <span className="">
                        <BiChevronUp />
                      </span>
                    ) : (
                      <span className="">
                        <BiChevronDown />
                      </span>
                    )}
                  </div>
                  <hr />
                  <div
                    style={{
                      height: value1 ? "90px" : "0",
                      overflow: "hidden",
                    }}
                  >
                    <p>
                      {" "}
                      Зарезервированные слова — это слова и символы, которые
                      имеют особое значение в Microsoft Access.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion__left--one">
              <div
                onClick={() => {
                  setValue2(!value2);
                  setValue(false);
                  setValue1(false);
                }}
                className="hero-text"
              >
                <div>
                  <div className="accordion__left--one--task">
                    <h1>Могу ли я вернуть деньги</h1>
                    {value2 ? (
                      <span className="">
                        <BiChevronUp className={""} />
                      </span>
                    ) : (
                      <span className="">
                        <BiChevronDown />
                      </span>
                    )}
                  </div>
                  <hr />
                  <div
                    style={{
                      height: value2 ? "90px" : "0",
                      overflow: "hidden",
                    }}
                  >
                    <p>
                      {" "}
                      Зарезервированные слова — это слова и символы, которые
                      имеют особое значение в Microsoft Access.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="accordion__left--one"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accardiones;
