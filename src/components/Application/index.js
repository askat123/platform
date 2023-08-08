import React, { useState } from "react";
import "../Application/index.scss";
import axios from "axios";

const Application = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [foun, setFoun] = useState("");
  const [emailDirty, setEmailDirty] = useState("");
  const [emailError, setemailError] = useState("Поле не может быть пустым!");
  const TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN';
  const CHAT_ID = 'YOUR_CHAT_ID';
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const res = (e) => {
    e.preventDefault();

    if (!name || !foun || !email) {
      alert("Пожалуйста, заполните все обязательные поля!");
      return;
    }

    let message = `<b>Заявка сайта</b>\n`;
    message += `<b>Имя отправителя:</b> ${name}\n`;
    message += `<b>Номер:</b> ${foun}\n`;
    message += `<b>Почта:</b> ${email}\n`;

    axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    }).then(res => console.log('ok',res.data)).catch(err => alert('no', err));

    setEmail('');
    setFoun('');
    setName('');
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
      default:
        break;
    }
  };

  const emailHandler = (el) => {
    setEmail(el.target.value);
    var re = /\S+@\S+\.\S+/;

    if (!re.test(el.target.value)) {
      setemailError("Некорректный email!!!");
    } else {
      setemailError("");
    }
  };
  

  return (
    <div id="application">
      <div className="container">
        <div className="application">
          <div className="application--title">
            <h1>Оставить заявку</h1>
            <p>
              Заполните краткую форму с ключевыми вопросами, и мы подготовимся к
              разговору с вами{" "}
            </p>
          </div>
          <form onSubmit={res}>
            <div className="application--input">
              <span>ФИО*</span>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="fio"
                type="text"
              />
              <span>Номер телефона*</span>
              <input
                value={foun}
                onChange={(e) => setFoun(e.target.value)}
                name="number"
                type="tel"
              />
              <span>Email*</span>
              {emailError && emailDirty && (
                <div style={{ color: "red" }}>{emailError}</div>
              )}
              <input
                value={email}
                onChange={(e) => emailHandler(e)}
                onBlur={(e) => blurHandler(e)}
                name="email"
                type="email"
              />
              <button type='submit' >Отправить</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Application;
