import React, { useState } from 'react'
import "../Application/index.scss"

const Application = () => {
const [email,setEmail] = useState("")
const [emailDirty,setEmailDirty] = useState("")
const [emailError,setemailError] = useState("Поле не может быть пустым!")
  


  const blurHandler = (e) => {
    
    switch (e.target.name){
      
        case "email" :
          setEmailDirty(true)
          break
    }
  }
const emailHandler = (el) => {
  setEmail(el.target.value)
  var re = /\S+@\S+\.\S+/;
  
  if (!re.test(el.target.value)){
    setemailError("Некорректный email  !!!")
  }else{
    setemailError("")
  }
}

  return (
    <div id='application'>
      <div className="container">
        <div className="application">
            <div className="application--title">
            <h1>Оставить заявку</h1>
            <p>Заполните краткую форму с ключевым вопросами, и мы подготовимся к разговору с вами </p>
            </div>
            <form action="" id='tg' 
            onSubmit={(e) => e}>
            <div className="application--input">
              <span>ФИО*</span>
              <input name='fio' type="text"/>
              <span>Номер телефон*</span>
              <input  name='number' type="tel" placeholder='+996'/>
              <span>Email*</span>
              { (emailError && emailDirty) && <div style={{color: "red"}}>{emailError}</div>}
              <input value={email} onChange={el => emailHandler(el)} onBlur={e => blurHandler(e)} name='email' type="email"/>
              <button>Отправить</button>
            </div>
              </form> 
        </div>
      </div>
    </div>
  )
}

export default Application
