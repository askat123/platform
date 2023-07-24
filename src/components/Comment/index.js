import React from "react";
import "./index.scss";
import usercom from "../../img/usercom.png";

const Comment = () => {
  return (
    <div id="comment">
      <div className="container">
        <div className="comment">
          <div className="comment--input">
            <input type="text" placeholder="Ваш комментарий" />
            <button>Отправить </button>
          </div>
          <div className="comment--text">
            <div className="comment--text__user">
              <img src={usercom} alt="" />
              <div>
                <h4>
                  Осмонова Нурай / <span>Около минуты назад</span>
                </h4>
                <p>Очень понравились уроки. Все более чем понятно! </p>
                <button>Ответить</button>
              </div>
            </div>
            <div className="comment--text__user">
              <img src={usercom} alt="" />
              <div>
                <h4>
                  Эгембердиева Кунсулуу / <span>  24.10.2021</span>
                </h4>
                <p>
                  Классный урок, первый раз вижу такое подробное объяснение
                  всего происходящего
                </p>
                <button>Ответить</button>
              </div>
            </div>
            <div className="comment--text__user">
              <img src={usercom} alt="" />
              <div>
                <h4>
                Таалай Бирдемке / <span>Около минуты назад</span>
                </h4>
                <p>
                  Как мне кажется, в конце видео, необходимо было сказать о том,
                  что информация - это то(в данном случае число) с помощью чего
                  можно устранить некую неопределенность(неизвестность) А так
                  вроде все замечательно.
                </p>
                <button>Ответить</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
