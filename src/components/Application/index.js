import React, { useState } from "react";
import "../Application/index.scss";
import axios from "axios";

const Application = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [foun, setFoun] = useState("");
  const [emailDirty, setEmailDirty] = useState("");
  const [emailError, setemailError] = useState("Поле не может быть пустым!");
  const TOKEN = '6420892676:AAHTcZ4Z3chtBHdCsM2yuoS-1B7ygyx-WIY'
  const CHAT_ID = '-1001928519999'
  const URL_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
  const res = (e) => {
    setEmail('')
    setFoun('')
    setName('')
    e.preventDefault()
    let message = `<b>Заявка сайта</b>\n`;
    message += `<b>Имя отправителя:</b> ${name}\n`;
    message += `<b>номер:</b> ${foun}\n`;
    message += `<b>Почта:</b> ${email}\n`;
    axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    }).then(res => console.log('ok',res.data)).catch(err => alert('no', err))
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setEmailDirty(true);
        break;
    }
  };
  const emailHandler = (el) => {
    setEmail(el.target.value);
    var re = /\S+@\S+\.\S+/;

    if (!re.test(el.target.value)) {
      setemailError("Некорректный email  !!!");
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
              Заполните краткую форму с ключевым вопросами, и мы подготовимся к
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
              <span>Номер телефон*</span>
              <input
                value={foun}
                onChange={(e) => setFoun(e.target.value)}
                name="number"
                type="tel"
                placeholder="+996"
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
              <button type='submit'>Отправить</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Application;
