import React from 'react';
import './courses.scss'
import image from './image/Arrow 2.svg'
const Courses = () => {
    return (
        <div id="courses">
            <div className="container">
                <p style={{color:'white'}}>Главная / Наши курсы</p>
            <center><h1>Курсы</h1></center>
        <div className={"courses"}>
                <div  className="courses__card">
                <div className="courses__card--end">
                <h1>Frontend-разработчик</h1>
                <p >Мастер создания сайтов. Умеет делать их красивыми,
                    интерактивными, с большим функционалом. Профессия
                    отлично подойдет
                    тем, кто хочет
                    фрилансить и постоянно
                    разрабатывать новые проекты</p>
                <button>Подробнее<img src={image} alt={'/'} className={'courses__card--end__icon'}/></button>
                    <hr className="courses__card--end__hr"/>
                </div>
            </div>
                <div  className="courses__card">
                <div className="courses__card--end">
                    <h1>Backend-разработчик</h1>
                    <p >Специалист, который отвечает за построение логики для
                        воплощения любой идеи. Он собирает фундамент и опорную систему
                        для проекта - от простого
                        сайта для магазина одежды до сложных
                        вычислительных систем нейронных сетей.</p>
                    <button>Подробнее<img src={image} alt={'/'} className={'courses__card--end__icon'}/></button>
                    <hr className="courses__card--end__hr"/>
                </div>
            </div>
                <div  className="courses__card">
                <div className="courses__card--end">
                    <h1>UX / UI Дизайнер</h1>
                    <p >Креативный специалист, который придумывает
                        дизайн и интерфейс продукта. Специалист UX/UI
                        отвечает за подбор форм, цветов, Функциональности
                        дизайна и прочих важных параметров
                        для комфорьного использования продукта.</p>
                    <button>Подробнее<img src={image} alt={'/'} className={'courses__card--end__icon'}/></button>
                    <hr className="courses__card--end__hr"/>
                </div>
            </div>
                <div  className="courses__card">
                <div className="courses__card--end">
                    <h1>DevOps - инженер</h1>
                    <p >Он разбирается в программировании и
                        инфраструктуре и объединяет эти знания
                        для оптимальной работы бизнеса.</p>
                    <button>Подробнее<img src={image} alt={'/'} className={'courses__card--end__icon'}/></button>
                    <hr className="courses__card--end__hr"/>
                </div>
            </div>
                <div  className="courses__card">
                    <div className="courses__card--end">
                        <h1>Android-разработчик</h1>
                        <p > Создает, обновляет, усовершенствует
                            мобильные приложения для смартфонов, планшетов,
                            электронных книг, игровых приставок и других девайсов,
                            работающих на операционной системе Android.</p>
                        <button>Подробнее<img src={image} alt={'/'} className={'courses__card--end__icon'}/></button>
                        <hr className="courses__card--end__hr"/>
                    </div>
                </div>
                <div  className="courses__card">
                <div className="courses__card--end">
                    <h1>Java-разработчик</h1>
                    <p >Мастер создания сайтов. Умеет делать их красивыми,
                        интерактивными, с большим функционалом. Профессия
                        отлично подойдет
                        тем, кто хочет
                        фрилансить и постоянно
                        разрабатывать новые проекты</p>
                    <button>Подробнее<img src={image} alt={'/'} className={'courses__card--end__icon'}/></button>
                    <hr className="courses__card--end__hr"/>
                </div>
            </div>
                <div  className="courses__card">
                <div className="courses__card--end">
                    <h1>С++ - разработчик</h1>
                    <p >Занимается разработкой
                        высокопроизводительных и высоконагруженных
                        систем, таких как поисковики, драйверы, игры
                        и приложения. </p>
                    <button>Подробнее<img src={image} alt={'/'} className={'courses__card--end__icon'}/></button>
                    <hr className="courses__card--end__hr"/>
                </div>
            </div>
                <div  className="courses__card">
                <div className="courses__card--end">
                    <h1>IOS - разработчик</h1>
                    <p >iOS разработчик - идеальная профессия
                        для того, кто любит мобильную продукцию
                        компании Apple. Специальность позволяет
                        совмещать творческие способности.
                    </p>
                    <button>Подробнее<img src={image} alt={'/'} className={'courses__card--end__icon'}/></button>
                    <hr className="courses__card--end__hr"/>
                </div>
            </div>
                <div  className="courses__card">
                <div className="courses__card--end">
                    <h1>Python - разработчик</h1>
                    <p >Cпециалист, который применяет в
                        работе многоуровневый язык программирования
                        Python.</p>
                    <button>Подробнее<img src={image} alt={'/'} className={'courses__card--end__icon'}/></button>
                    <hr className="courses__card--end__hr"/>
                </div>
            </div>

        </div>
            </div>
        </div>
    );
};

export default Courses;
