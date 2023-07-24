import React from 'react';
import "../Kurs/index.scss";
import {BsArrowRight} from "react-icons/bs"
import { Link } from 'react-router-dom';

const Kurs = () => {
  return (
    <section id='kurs'>
        <div className="container"> 
             <h1>Курсы</h1>
            <div className="kurs">
               <div className="kurs--block">
               <div className='kurs--block__one'>
                    <h2>Frontend-разработчик</h2>
                    <p>Мастер создания сайтов. Умеет <br />делать их красивыми, <br />интерактивными, с большим <br />функционалом. Профессия отлично <br />подойдет тем, кто хочет фрилансить <br />и постоянно разрабатывать новые <br />проекты</p>
                   <Link to={"/front"}> <h3>Подробнее<BsArrowRight/></h3></Link>
                </div>
                 <div className='kurs--block__one'>
                    <h2>Backend-разработчик</h2>
                    <p>Специалист, который отвечает за построение логики для воплощения любой идеи. Он собирает фундамент и опорную систему для проекта - от простого сайта для магазина одежды до сложных вычислительных систем нейронных сетей.</p>
                    <Link><h3>Подробнее<BsArrowRight/></h3></Link>
                </div>
                <div className='kurs--block__one'>
                    <h2>UX / UI Дизайнер</h2>
                    <p>Креативный специалист, который придумывает дизайн и интерфейс продукта. Специалист UX/UI отвечает <br />за подбор форм, цветов, Функциональности дизайна и прочих важных параметров для комфорьного использования продукта.</p>
                    <Link><h3>Подробнее<BsArrowRight/></h3></Link>
                </div>
               </div>
                <Link to={"/ourcours"}><button>Все курсы</button></Link>
            </div>
        </div>
    </section>
  )
}

export default Kurs;