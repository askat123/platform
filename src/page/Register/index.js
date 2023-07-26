import React from "react";
import "../Register/index.scss";

const Register = () => {
  return (
    <section id="register">
      <div className="container">
        <div className="register">
          <h3>
            <span>Главная/</span> Зарегистрироваться на курс
          </h3>
          <h1>Зарегистрироваться на курс</h1>
          <div className="register--block">
            <div className="register--block__developer">
              <h4>Курс</h4>
              <h2>Frontend-разработчик</h2>
              <p>
                Идея реактивного программирования появилась сравнительно
                недавно, лет 10 назад.{" "}
              </p>
              <div className="line"></div>
              <h4>Лектор</h4>
              <h2>Евгений Александрович</h2>
              <p>Frontend разработчик</p>
              <div className="line"></div>
              
              <div className="register--block__developer--modul">
                 <div className="register--block__developer--modul__modul1">
                <h5>В курс входит </h5>
                <h6>3 модулей <br/>60материалов</h6>
              </div>
              <div className="register--block__developer--modul__modul2">
                <h5>Доступ</h5>
                <h6>Навсегда</h6>
              </div>
              </div>
              <div className="line"></div>
               <h1>* - материалы включают уроки, тесты и задания. Некоторые материалы могут быть недоступны при самостоятельном обучении. </h1>
            </div>
            

           
           


         </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
