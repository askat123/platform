import React from 'react';
import "../MasterClass/index.scss";
import { Link } from 'react-router-dom';


const MasterClass = () => {
  return (
    <section id='master'>
        <div className="container">
            <div className="master">
                <h1>Мастер-классы</h1>
                <div className="master--class">
                    <div className='master--class__group'>
                        <h2>Реактивное программирование на Java: как, зачем и стоит ли? </h2>
                        <p>Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало популярность этого <br />относительно нового подхода и почему сейчас он в тренде, рассказал на конференции РИТ++ ...</p>
                    </div>
                </div>
                <div className="master--class">
                    <div className='master--class__group'>
                        <h2>Реактивное программирование на Java: как, зачем и стоит ли? </h2>
                        <p>Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало популярность этого <br />относительно нового подхода и почему сейчас он в тренде, рассказал на конференции РИТ++ ...</p>
                    </div>
                </div>
                <div className="master--class">
                    <div className='master--class__group'>
                        <h2>Реактивное программирование на Java: как, зачем и стоит ли? </h2>
                        <p>Программирования появилась сравнительно недавно, лет 10 назад. Что вызвало популярность этого <br />относительно нового подхода и почему сейчас он в тренде, рассказал на конференции РИТ++ ...</p>
                    </div>
                </div>
               <Link><button>Все мастер классы</button></Link>
            </div>
        </div>
    </section>
  )
}

export default MasterClass;