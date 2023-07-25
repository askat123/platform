import React, { useState } from "react";

import "../Accardiones/index.scss";
import { BsQuestionLg } from "react-icons/bs";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

const Accardiones = () => {
  const [value, setValue] = useState(true);
  const [value1, setValue1] = useState(true);
  const [value2, setValue2] = useState(true);

  return (
    <div className="accordion">
      <div className="accordion--right">
        <h1>
          Остались <br /> вопросы?
        </h1>
        <div className="accordion--icon" style={{ color: "blue" }}>
          <BsQuestionLg />
        </div>
      </div>
      <div className="accordion__left" style={{ background: "#02294b" }}>
        <div className="accordion__left--one">
          <div
            onClick={() => {
              setValue(!value);
              setValue1(false);
              setValue2(false);
            }}
            className="hero-text"
          >
            <div>
              <div className="accordion__left--one--task">
                <h1>Что такое зарезервированные слова в программировании?</h1>
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
              <div style={{ height: value ? "60px" : "0", overflow: "hidden" }}>
                <p>
                  {" "}
                  Зарезервированные слова — это слова и символы, которые имеют
                  особое значение в Microsoft Access.
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
                style={{ height: value1 ? "60px" : "0", overflow: "hidden" }}
              >
                <p>
                  {" "}
                  Зарезервированные слова — это слова и символы, которые имеют
                  особое значение в Microsoft Access.
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
                style={{ height: value2 ? "60px" : "0", overflow: "hidden" }}
              >
                <p>
                  {" "}
                  Зарезервированные слова — это слова и символы, которые имеют
                  особое значение в Microsoft Access.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion__left--one"></div>
      </div>
    </div>
  );
};

export default Accardiones;
