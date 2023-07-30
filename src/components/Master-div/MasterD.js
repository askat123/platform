import React from "react";
import "./index.scss";
import { AiOutlineCheck } from "react-icons/ai";

const MasterD = () => {
  return (
    <div id="one">
      <div className="container">
        <div style={{marginBottom:'100px'}} className="one">
          <div className="one--text">
            <h1>Процесс обучения</h1>
            <p>
              Каждый из наших мастер-классов состоит из 2-8 уроков. Рекомендуем{" "}
              <br /> проходить мастер-класс последовательно, урок за уроком
            </p>
          </div>
          <div className="one--df">
            <div className="one--df__div">
              <div className="one--df__div--div1">
                <div className="one--df__div--div1__a">
                  <div style={{ marginTop: "50px" }}>
                    <center>
                      <h1>1</h1>
                    </center>
                    <center>
                      <h3>Мастер-класс</h3>
                    </center>
                    <center>
                      <p>
                        Вы получите доступ ко всем урокам мастер-класса и другим
                        дополнительным материалам
                      </p>
                    </center>
                  </div>
                </div><div className="one--df__div--div1__a">
                  <div style={{ marginTop: "50px" }}>
                    <center>
                      <h1>2</h1>
                    </center>
                    <center>
                      <h3>Своё расписание</h3>
                    </center>
                    <center>
                      <p>
                      Доступ к мастер-классам открыт 24/7. Вы сами решаете, когда у вас следующий урок
                      </p>
                    </center>
                  </div>
                </div>
              </div><div className="one--df__div--div1">
                <div className="one--df__div--div1__a">
                  <div style={{ marginTop: "50px" }}>
                    <center>
                      <h1>3</h1>
                    </center>
                    <center>
                      <h3>Сообщество</h3>
                    </center>
                    <center>
                      <p>
                      Вы сможете общаться и обмениваться мнениями с другими учениками в комментариях
                      </p>
                    </center>
                  </div>
                </div><div className="one--df__div--div1__a">
                  <div style={{ marginTop: "50px" }}>
                    <center>
                      <h1>4</h1>
                    </center>
                    <center>
                      <h3>Доступ</h3>
                    </center>
                    <center>
                      <p>
                      Мы предоставляем вам 6 неделный  доступ к материалам оплаченного мастер-класса
                      </p>
                    </center>
                  </div>
                </div>
              </div>
            </div>
            <div className="one--df__div1">
                <h3>Мастер-класс “Реактивное <br /> программирование на Java : как,<br /> зачем и стоит ли? Часть 1”</h3>
                <h1>46,00 $</h1>
                <div className="one--df__div1--icon"><AiOutlineCheck/><p>Доступ к мастер классу навсегда</p></div>
                <div className="one--df__div1--icon"><AiOutlineCheck/><p>Доступны все 5 уроков</p></div>
                <div className="one--df__div1--icon"><AiOutlineCheck/><p>Дополнительные материалы</p></div>
                <button>Купить мастер-класс </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterD;
