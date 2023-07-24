import React from 'react'
import "../Level/index.scss"
import { Link } from 'react-router-dom'

const Level = () => {
  return (
    <section id='level'>
        <div className="container">
            <div className="level">
                <h1>Уровень пакетов</h1>
                <p>Списания будут автоматическими. Вы всегда можете отменить подписку в <br/>Вашем личном кабинете и больше списаний не будет</p>
            </div>
            <div className="div">
            <div className="div--dollar">
                <h3>Месяц +</h3>
                <p>Доступны: Все статьи</p>
                <h1>105,00 $</h1>
                <p>Ежемесячно</p>
                <div className='div--dollar__btn'>
                 <button className='div--dollar__btn--one'>Оформить подписку</button>
                 <button className='div--dollar__btn--two'>Подробнее</button>
                </div>
            </div>
            <div className="div--dollar">
                <h3>Год +</h3>
                <p>Доступны: Все Мастер классы и <br />статьи и курсы</p>
                <h1>585,00 $</h1>
                <p>Ежегодно</p>
                <div className='div--dollar__btn'>
                 <button className='div--dollar__btn--one'>Оформить подписку</button>
                <Link> <button className='div--dollar__btn--two'>Подробнее</button></Link>
                </div>
            </div>
            <div className="div--dollar">
                <h3>Год</h3>
                <p>Доступны: Все Мастер классы и <br />статьи и курсы</p>
                <h1>220,00 $</h1>
                <p>Ежегодно</p>
                <div className='div--dollar__btn'>
                 <button className='div--dollar__btn--one'>Оформить подписку</button>
                 <button className='div--dollar__btn--two'>Подробнее</button>
                </div>
            </div>
            </div>
           
        </div>
    </section>
  )
}

export default Level