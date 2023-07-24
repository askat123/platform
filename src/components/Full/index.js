import React from 'react'
import lock from "../../img/lock.png"
import { Link } from 'react-router-dom'
import "./index.scss"

const Full = () => {
  return (
    <div id='full'>
      <div className="container">
      <div className="full">
        <img src={lock} alt="" />
        <div className="full--text">
            <h2>Оформите подписку, чтобы посмотреть полную версию</h2>
            <p>Вы уже авторизованы? <span>  Авторизуйтесь</span></p>
        </div>
        <Link><button>Получить доступ за 225,00$</button></Link>
      </div>
      </div>
    </div>
  )
}

export default Full
