import React, { useState } from "react";
import "../Register/index.scss";
import { Link } from "react-router-dom";
import { AiOutlineClose } from 'react-icons/ai';


const Register = () => {

const [modal, setModal] = useState(false)
const [add, setAdd] = useState(false);



  const handleError = () => {
    if (
      nameError.length === 0 ||
      telError.length === 0 ||
      emailError.length === 0 ||
      kartaError.length === 0 ||
      mmError.length === 0 ||
      cvcError.length === 0 ||
       checkError.length === 0||
      visa === false && master === false
    )
     { 
      setEmail(true);
      setName(true);
      setTel(true);
      setKarta(true);
      setCvc(true);
      setMm(true);
      setVisaError(true)
      setCheck(true)
    }else{
      setModal(true)
    }
  };
  const [nameError, setNameError] = useState("");
  const [telError, setTelError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [kartaError, setKartaError] = useState("");
  const [mmError, setMmError] = useState("");
  const [cvcError, setCvcError] = useState("");
  const [checkError, setCheckError] = useState("")

  const [name, setName] = useState(false);
  const [tel, setTel] = useState(false);
  const [email, setEmail] = useState(false);
  const [karta, setKarta] = useState(false);
  const [cvc, setCvc] = useState(false);
  const [mm, setMm] = useState(false);
  const [check, setCheck] = useState(false)

  const [visaError, setVisaError] = useState(false)

  const [visa, setVisa] = useState(false);
  const [master, setMaster] = useState(false);

  console.log(add);
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
                  <h6>
                    3 модулей <br />
                    60материалов
                  </h6>
                </div>
                <div className="register--block__developer--modul__modul2">
                  <h5>Доступ</h5>
                  <h6>Навсегда</h6>
                </div>
              </div>
              <div className="line"></div>
              <h1>
                * - материалы включают уроки, тесты и задания. Некоторые
                материалы могут быть недоступны при самостоятельном обучении.{" "}
              </h1>
            </div>

            <div className="register--block__input">
              <div className="fio">
                <span>Ф.И.О*</span>
                <input
                 onChange={(e) => {
                  setNameError(e.target.value);
                  setName(false);
                }}
                style={{ border: name ? "1px solid red" : "" }}
                  className="in1"
                  type="text"
                />
              </div>
              <div className="fio">
                <h6>Телефон*</h6>
                <input
                  onChange={(e) => {
                    setTelError(e.target.value);
                    setTel(false);
                  }}
                  style={{ border: tel ? "1px solid red" : "" }}
                  className="in2"
                  type="number"
                  placeholder="+996"
                />
              </div>
              <div className="fio">
                <h5>E mail*</h5>
                <input
                  onChange={(e) => {
                    setEmailError(e.target.value);
                    setEmail(false);
                  }}
                  style={{ border: email ? "1px solid red" : "" }}
                  className="in3"
                  type="email"
                />
              </div>
              <p>Выберите платежную карту</p>
              <div className="register--block__input--visa">
                <div>
                  <div style={{border: visaError ? "1px solid red" : ""}} className="rad">
                    <input
                      onClick={() => {
                        setVisa(true);
                        setMaster(false);
                        setVisaError(false)
                      }}
                      name="ppp"
                      type="radio"
                      className="radio"
                    />
                    <h2>Visa</h2>
                  </div>
                </div>
                <div>
                  <div style={{border: visaError ? "1px solid red" : ""}} className="rad">
                    <input
                      onClick={() => {
                        setVisa(false);
                        setMaster(true);
                        setVisaError(false)
                      }}
                      name="ppp"
                      type="radio"
                      className="radio"
                    />
                    <h2>MasterCard</h2>
                  </div>
                </div>
              </div>

              <div className="register--block__input--number">
                <h2>Номер карты *</h2>
                <input
                  onChange={(e) => {
                    setKartaError(e.target.value);
                    setKarta(false);
                  }}
                  style={{ border: karta ? "1px solid red" : "" }}
                  maxLength={10}
                  type="text"
                />
              </div>

              <div className="register--block__input--cvc">
                <div className="mmgg">
                  <h4 className="h11">ММ/ГГ *</h4>
                  <input
                    onChange={(e) => {
                      setMmError(e.target.value);
                      setMm(false);
                    }}
                    style={{ border: mm ? "1px solid red" : "" }}
                    maxLength={4}
                    
                  />
                </div>
                <div className="mmgg">
                  <h4>CVC *</h4>
                  <input
                    onChange={(e) => {
                      setCvcError(e.target.value);
                      setCvc(false);
                    }}
                    style={{ border: cvc ? "1px solid red" : "" }}
                    maxLength={4}
                    type="text"
                  />
                </div>
              </div>

              <div className="register--block__input--btn">
                <button onClick={() =>{
                  handleError() 

                }}>Оплатить 225.00$</button>
              </div>
            </div>
          </div>
          <div className="register--check">
            <input
            onChange={(e) => {
              setCheckError(e.target.value);
            setCheck(false);
            }}
            style={{ border: check ? "2px solid red" : "" }}
             type="checkbox" />
            <h4>Я ознакомился и согласен с Условиями оказания услуг</h4>
          </div>
        </div>
      

        <div   style={{
          display: modal ? "block" : "none",
          zIndex:modal ? "11":""
        }}className="modal">
          <h4 onClick={()=> setModal(false)}><AiOutlineClose/></h4>
            <h2>Благодарим за покупку!!!</h2>
            <p>Теперь вам доступен  курс “Frontend разработчик”  </p>
           <Link > <button>Ок, посмотреть покупку  </button></Link>
         
        </div>


      </div>
        <div style={{
        background: modal ? "black" : "",
        zIndex:modal ? "10":""
       }} className="blur"></div>
    </section>
  );
};

export default Register;
