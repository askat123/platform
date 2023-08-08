import React, { useState } from "react";
import "../Register/index.scss";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Register = () => {
  const [modal, setModal] = useState(false);
  const [add, setAdd] = useState(false);

  const handleError = () => {
    if (
      nameError.length === 0 ||
      telError.length === 0 ||
      emailError.length === 0 ||
      kartaError.length === 0 ||
      mmError.length === 0 ||
      cvcError.length === 0 ||
      checkError.length === 0 ||
      (visa === false && master === false)
    ) {
      setEmail(true);
      setName(true);
      setTel(true);
      setKarta(true);
      setCvc(true);
      setMm(true);
      setVisaError(true);
      setCheck(true);
    } else {
      setModal(true);
    }
  };
  const [nameError, setNameError] = useState("");
  const [telError, setTelError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [kartaError, setKartaError] = useState("");
  const [mmError, setMmError] = useState("");
  const [cvcError, setCvcError] = useState("");
  const [checkError, setCheckError] = useState("");

  const [name, setName] = useState(false);
  const [tel, setTel] = useState(false);
  const [email, setEmail] = useState(false);
  const [karta, setKarta] = useState(false);
  const [cvc, setCvc] = useState(false);
  const [mm, setMm] = useState(false);
  const [check, setCheck] = useState(false);

  const [visaError, setVisaError] = useState(false);

  const [visa, setVisa] = useState(false);
  const [master, setMaster] = useState(false);

  console.log(add);
  return (
    <section id="register">
      <div className="container">
        <h3>
          <span>Главная/</span> Зарегистрироваться на курс
        </h3>
        <h1>Зарегистрироваться на курс</h1>
        <div className="register">
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
                {/* <span>Ф.И.О*</span> */}
                <input
                  onChange={(e) => {
                    setNameError(e.target.value);
                    setName(false);
                  }}
                  style={{ border: name ? "1px solid red" : "" }}
                  className="in1"
                  type="text"placeholder="Ф.И.О*"
                />
              </div>
              <div className="fio">
                {/* <h6>Телефон*</h6> */}
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
                {/* <h5>E mail*</h5> */}
                <input
                  onChange={(e) => {
                    setEmailError(e.target.value);
                    setEmail(false);
                  }}
                  style={{ border: email ? "1px solid red" : "" }}
                  className="in3"
                  type="email"placeholder="E mail*"
                />
              </div>
              <p>Выберите платежную карту</p>
              <div className="register--block__input--visa">
                <div>
                  <div
                    style={{ border: visaError ? "1px solid red" : "" }}
                    className="rad"
                  >
                    <input
                      onClick={() => {
                        setVisa(true);
                        setMaster(false);
                        setVisaError(false);
                      }}
                      name="ppp"
                      type="radio"
                      className="radio"
                    />
                    <h2>Visa</h2>
                  </div>
                </div>
                <div>
                  <div
                    style={{ border: visaError ? "1px solid red" : "" }}
                    className="rad">
                    <input
                      onClick={() => {
                        setVisa(false);
                        setMaster(true);
                        setVisaError(false);
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
                {/* <h2>Номер карты *</h2> */}
                <input
                  onChange={(e) => {
                    setKartaError(e.target.value);
                    setKarta(false);
                  }}
                  style={{ border: karta ? "1px solid red" : "" }}
                  maxLength={10}
                  type="text"placeholder="Номер карты *"
                />
              </div>

              <div className="register--block__input--cvc">
                <div className="mmgg">
                  {/* <h4 className="h11">ММ/ГГ *</h4> */}
                  <input
                    onChange={(e) => {
                      setMmError(e.target.value);
                      setMm(false);
                    }}
                    style={{ border: mm ? "1px solid red" : "" }}
                    maxLength={4} placeholder="ММ/ГГ *"
                  />
                </div>
                <div className="mmgg">
                  {/* <h4 className="h12">CVC *</h4> */}
                  <input
                    onChange={(e) => {
                      setCvcError(e.target.value);
                      setCvc(false);
                    }}
                    style={{ border: cvc ? "1px solid red" : "" }}
                    maxLength={4}
                    type="text"placeholder="CVC *"
                  />
                </div>
              </div>

              <div className="register--block__input--btn">
                <button
                  onClick={() => {
                    handleError();
                  }}
                >
                  Оплатить 225.00$
                </button>
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
              type="checkbox"
            />
            <h4>Я ознакомился и согласен с Условиями оказания услуг</h4>
          </div>
        </div>

        <div
          style={{
            display: modal ? "block" : "none",
            zIndex: modal ? "11" : "",
          }}
          className="modal"
        >
          <h4 onClick={() => setModal(false)}>
            <AiOutlineClose />
          </h4>
          <h2>Благодарим за покупку!!!</h2>
          <p>Теперь вам доступен курс “Frontend разработчик” </p>
          <Link>
            {" "}
            <button>Ок, посмотреть покупку </button>
          </Link>
        </div>
      </div>
      <div
        style={{
          background: modal ? "black" : "",
          zIndex: modal ? "10" : "",
        }}
        className="blur"
      ></div>
    </section>
  );
};

export default Register;




// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./index.scss";

// const Register = () => {
//   const [top, setTop] = useState(false);
//   const [redirectToFront, setRedirectToFront] = useState(false);
//   const [chek, setChek] = useState(false);
//   const [showCheckboxMessage, setShowCheckboxMessage] = useState(false);

//   const oplata = (e) => {
//     e.preventDefault();

//     const i1 = document.querySelector(".i1");
//     const i2 = document.querySelector(".i2");
//     const i3 = document.querySelector(".i3");
//     const i5 = document.querySelector(".i5");
//     const i6 = document.querySelector(".i6");
//     const i7 = document.querySelector(".i7");
//     const i8 = document.querySelector(".i8");
//     const i9 = document.querySelector(".i9");
//     const i10 = document.querySelector(".i10");

//     if (
//       i1.value.trim() === "" ||
//       i2.value.trim() === "" ||
//       i3.value.trim() === "" ||
//       i5.value.trim() === "" ||
//       i6.value.trim() === "" ||
//       i7.value.trim() === "" ||
//       i8.value.trim() === ""
//     ) {
//       // If at least one field is empty, apply a red border to the empty fields
//       i1.style.border =
//         i1.value.trim() === "" ? "1px solid red" : "1px solid white";
//       i2.style.border =
//         i2.value.trim() === "" ? "1px solid red" : "1px solid white";
//       i3.style.border =
//         i3.value.trim() === "" ? "1px solid red" : "1px solid white";
//       i5.style.border =
//         i5.value.trim() === "" ? "1px solid red" : "1px solid white";
//       i6.style.border =
//         i6.value.trim() === "" ? "1px solid red" : "1px solid white";
//       i7.style.border =
//         i7.value.trim() === "" ? "1px solid red" : "1px solid white";
//       i8.style.border =
//         i8.value.trim() === "" ? "1px solid red" : "1px solid white";
//       i9.parentNode.style.border = i9.checked
//         ? "1px solid white"
//         : "1px solid red";
//       i10.parentNode.style.border = i10.checked
//         ? "1px solid white"
//         : "1px solid red";
//     } else if (!chek) {
//       // If all fields are filled, but the checkbox is not checked, show the checkbox message
//       setShowCheckboxMessage(true);
//     } else {
//       // If all fields are filled, and the checkbox is checked, apply a green border to the "Оплатить" button and redirect to another page
//       setTop(true);
//       setTimeout(() => {
//         setRedirectToFront(true);
//       }, 2000);
//     }
//   };

//   function oplata2() {
//     const i = document.querySelector("input");
//     const i1 = document.querySelector(".i1");
//     const i2 = document.querySelector(".i2");
//     const i3 = document.querySelector(".i3");
//     const i5 = document.querySelector(".i5");
//     const i6 = document.querySelector(".i6");
//     const i7 = document.querySelector(".i7");
//     const i8 = document.querySelector(".i8");
//     const i9 = document.querySelector(".i9");
//     const i10 = document.querySelector(".i10");

//     i.style.border =
//       i.value.trim() === "" ? "1px solid red" : "1px solid white";
//     i1.style.border =
//       i1.value.trim() === "" ? "1px solid red" : "1px solid white";
//     i2.style.border = i2.value === "" ? "1px solid red" : "1px solid white";
//     i3.style.border = i3.value === "" ? "1px solid red" : "1px solid white";
//     i5.style.border = i5.value === "" ? "1px solid red" : "1px solid white";
//     i6.style.border = i6.value === "" ? "1px solid red" : "1px solid white";
//     i7.style.border = i7.value === "" ? "1px solid red" : "1px solid white";
//     i8.style.border = chek ? "1px solid white" : "1px solid red"; // Update the border for checkbox

//     const radioVisa = document.querySelector(".i9");
//     const radioMasterCard = document.querySelector(".i10");

//     radioVisa.parentNode.style.border = "1px solid white";
//     radioMasterCard.parentNode.style.border = "1px solid white";

//     if (radioVisa.checked || radioMasterCard.checked) {
//       radioVisa.parentNode.style.border = "1px solid white";
//       radioMasterCard.parentNode.style.border = "1px solid white";
//     } else {
//       radioVisa.parentNode.style.border = "1px solid red";
//       setChek(radioVisa.checked || radioMasterCard.checked);
//     };
//       return (
//         <div id="god">
//           <div className="container">
//             <div className="god">
//               <h4
//                 className="god--h4"
//                 // style={{
//                 //   color: "white",
//                 //   padding: "50px 0 50px 0",
//                 // }}
//               >
//                 Главная/ <span> Зарегистрироваться на курс</span>
//               </h4>
//               <h3 className="god--h3">Зарегистрироваться на курс</h3>
//               <div className="banner">
//                 <div className="action">
//                   <div className="action-red">
//                     <h4>Курс</h4>
    
//                     <h1>Frontend-разработчик</h1>
//                     <p>
//                       Идея реактивного программирования
//                       <br />
//                       появилась сравнительно недавно, лет 10 назад.{" "}
//                     </p>
//                   </div>
//                   <div className="action-redd">
//                     <h4>Лектор</h4>
    
//                     <h1>Евгений Александрович </h1>
//                     <p>Frontend разработчик</p>
//                   </div>
//                   <div className="action-modul">
//                     <div>
//                       <h3>В курс входит </h3>
//                       <p>
//                         3 модулей
//                         <br /> 60материалов
//                       </p>
//                     </div>
//                     <div className="action-mod">
//                       <h3>Доступ</h3>
//                       <p>Навсегда</p>
//                     </div>
//                   </div>
//                   <h6>
//                     * - материалы включают уроки, тесты и задания. Некоторые
//                     материалы могут быть недоступны при самостоятельном обучении.{" "}
//                   </h6>
//                 </div>
//                 <div className="god--about">
//                   <form action="#">
//                     <div className="god--about__input">
//                       <input
//                         onInput={oplata2}
//                         className="i1"
//                         required
//                         placeholder="Ф.И.О*"
//                         name="name"
//                         type="text"
//                       />
//                       <input
//                         onInput={oplata2}
//                         className="i2"
//                         required
//                         placeholder="Телефон*"
//                         name="tel"
//                         type="number"
//                       />
//                       <input
//                         onInput={oplata2}
//                         className="i3"
//                         required
//                         placeholder="E mail*"
//                         name="email"
//                         type="email"
//                       />
    
//                       <div className="god--about__input--radio">
//                         <div className="god--about__input--radio__one">
//                           <input
//                             onInput={oplata2}
//                             className="i9"
//                             required
//                             name="radio"
//                             type="radio"
//                           />
//                           <h2>Visa</h2>
//                         </div>
//                         <div className="god--about__input--radio__one">
//                           <input
//                             onInput={oplata2}
//                             className="i10"
//                             name="radio"
//                             type="radio"
//                           />
//                           <h2>MasterCard</h2>
//                         </div>
//                       </div>
//                       <input
//                         onInput={oplata2}
//                         className="i5"
//                         required
//                         placeholder="Номер карты *"
//                         name="karta"
//                         type="text"
//                         maxLength={14}
//                       />
//                       <div className="god--about__input--cvc">
//                         <input
//                           onInput={oplata2}
//                           className="i6"
//                           required
//                           placeholder="ММ/ГГ *"
//                           type="text"
//                           maxLength={4}
//                         />
//                         <input
//                           onInput={oplata2}
//                           className="i7"
//                           required
//                           nInput={oplata2}
//                           placeholder="CVC *"
//                           type="text"
//                           maxLength={3}
//                         />
//                       </div>
//                       <div className="god--about__input--chekbox">
//                         <input
//                           onInput={oplata2}
//                           className="i8"
//                           required
//                           type="checkbox"
//                           checked={chek}
//                           onChange={() => setChek(chek)}
//                         />
//                         <h5>Я ознакомился и согласен с Условиями оказания услуг</h5>
//                       </div>
//                       <button className="oplata" onClick={oplata} type="submit">
//                         Оплатить 220.00$
//                       </button>
//                     </div>
//                     <div
//                       className="modal-reg"
//                       style={{
//                         display: top ? "block" : "none",
//                       }}
//                     >
//                       <h3 className="toppp">Благодарим за покупку!!!</h3>
//                       <p>Теперь вам доступен курс “Frontend разработчик”</p>
//                       <Link to="/pass">
//                         <center>
//                           <button>Ок, посмотреть покупку</button>
//                         </center>
//                       </Link>
//                       <h1 onClick={() => setTop(false)}>x</h1>
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     };
//   };
    
//     export default Register;
        