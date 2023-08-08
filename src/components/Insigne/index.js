import React from "react";
import { Link } from "react-router-dom";
import user from "../../img/user.png"
import "./index.scss"

const Insigne = () => {
  return (
    <div id="insigne">
      <div className="container">
        <div className="insigne">
          <img src={user} alt="" />
          <div className="insigne--text">
            <h2>Вы не зарегистрировались!</h2>
            <p>
            Чтобы оставить комментарий, пожалуйста авторизуйтесь или <br />зарегитрируйтесь.
            </p>
          </div>
          <Link to={"/comment"}>
            <button>Получить доступ за 225,00$</button>
          </Link>
        </div>
        <h1 style={{
          fontFamily: "Montserrat",
          padding: "60px 0 0 0"
        }}>Другие статьи </h1>
      </div>
    </div>
  );
};

export default Insigne;
