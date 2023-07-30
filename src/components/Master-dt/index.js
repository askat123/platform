import React from 'react';
import './index.scss'
import MasterH from '../master-header/masterH';
import MasterHr from '../master-hero/MasterHr';
import MasterS from '../masterSenter/masterS';
import MasterD from '../Master-div/MasterD';
import MasterF from '../MasterF/MasterF';
import { NavLink } from 'react-router-dom';


const Masterdt = () => {
    return (
        <div id="masterdt">
            <div className="container">
                <div  style={{marginBottom:'150px'}} className="masterdt">
                    <p>Главная / Мастер классы / <span>Реактивное программирование на Java</span></p>
                    <div className="masterdt--text">
                    <div className="masterdt--text__masterdt-text">
                        <h1>Реактивное программирование <br /> на Java : как, зачем и стоит ли? <br /> Часть 1 </h1>
                        <p>Идея реактивного программирования появилась <br /> сравнительно недавно, лет 10 назад. Что вызвало <br /> популярность этого относительно нового подхода и почему <br /> сейчас он в тренде, рассказал на конференции </p>
                        <NavLink to={'/youtube'}><button>Купить мастер-классы 46$ </button></NavLink>
                    </div>
                    <div className="masterdt--text__masterdt-text1">
                        <p>Доступ: </p>
                        <h5 style={{marginBottom: '60px'}}>6 недель</h5>
                        <p>В мастер-класс входит: </p>
                        <h5>5 уроков</h5>
                    </div>
                    </div>
                </div>
            </div>
            <MasterH/>
            <MasterHr/>
            <MasterS/>
            <MasterD/>
            <MasterF/>
        </div>
    );
};

export default Masterdt;