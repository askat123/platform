import React from 'react';
import './Folloe.scss';
import {AiOutlineCheck} from 'react-icons/ai'


const Follow = () => {
    return (
        <div id="follow">
                <div className="follow">
                    <div className="follow--follow-text">
                        <h1>Подписки</h1>
                        <div className="follow--follow-text__follow-div">
                            <div>
                                <p>Тариф:</p>
                                <p>Статус:</p>
                                <p>Сумма:</p>
                                <p>Карта:</p>
                                <p>Действует до:</p>
                            </div>
                            <div>
                                <p>Год </p>
                                <p>Начальная</p>
                                <p>220.00 $</p>
                                <p>5106 21 ХХ ХХХХ 4186</p>
                                <p>30 . 09.  2022 г</p>
                            </div>
                            
                        </div>
                    </div>
                    <div className="follow--follow-text1">
                    <h1 style={{marginBottom: '40px'}}>Другие тарифы</h1>
                    <div  className="follow--follow-text1__follow-df">
                        <div className="follow--follow-text1__follow-df--div1">
                            <h4>Месяц +</h4>
                            <h1>105,00 $</h1>
                            <button style={{marginLeft:'30px'}} className='follow--follow-text1__follow-df--div1__btn'>Ежемесячно</button>
                            <div style={{marginLeft:'30px',display:'flex' , alignItems:'center'}}><AiOutlineCheck style={{marginRight: '5px'}}/><p>Все статьи</p></div>
                            <center><button style={{marginTop:'220px'}}>Оформить подписку</button></center>
                        </div><div className="follow--follow-text1__follow-df--div1">
                            <h4>Год +</h4>
                            <h1>585,00 $</h1>
                            <button style={{marginLeft:'30px'}} className='follow--follow-text1__follow-df--div1__btn'>Ежегодно</button>
                            <div style={{marginLeft:'30px',display:'flex' , alignItems:'center'}}><AiOutlineCheck style={{marginRight: '5px'}}/><p>Все статьи</p></div>
                            <div style={{marginLeft:'30px',display:'flex' , alignItems:'center'}}><AiOutlineCheck style={{marginRight: '5px'}}/><p>Все мастер классы</p></div>
                            <div style={{marginLeft:'30px',display:'flex' , alignItems:'center'}}><AiOutlineCheck style={{marginRight: '5px' , marginTop:'-15px'}}/><p>Доступ к курсу “DevOps - <br /> инженер”</p></div>
                            <center><button style={{marginTop:'88px'}}>Оформить подписку</button></center>
                        </div>
                    </div>
                    </div>
                </div>
        </div>
    );
};

export default Follow;

// width: 349px;
// height: 481px;
// flex-shrink: 0;
// border-radius: 10px;
// background: #FFF;