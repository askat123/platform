import React from "react";
import "../Prosess/index.scss";
import Slider from "../Slider";

const Prosess = () => {
  return (
    <>
      <section id="prosess">
        <div className="container">
          <div className="prosess">
            <h1>Процесс обучения</h1>
            <div className="prosess--block">
              <div className="prosess--block__one">
                <h1>1</h1>
                <h3>Мастер-класс</h3>
                <p>
                  Вы получите доступ ко всем урокам мастер-класса и другим
                  дополнительным материалам
                </p>
              </div>
              <div className="prosess--block__one">
                <h1>2</h1>
                <h3>Своё расписание</h3>
                <p>
                  Доступ к мастер-классам открыт 24/7. Вы сами решаете, когда у
                  вас следующий урок
                </p>
              </div>
              <div className="prosess--block__one">
                <h1>3</h1>
                <h3>Сообщество</h3>
                <p>
                  Вы сможете общаться и обмениваться мнениями с другими
                  учениками в комментариях
                </p>
              </div>
              <div className="prosess--block__one">
                <h1>4</h1>
                <h3>Доступ</h3>
                <p>
                  Мы предоставляем вам бессрочный доступ к материалам любого
                  оплаченного мастер-класса
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Slider />
    </>
  );
};

export default Prosess;
