import React, {useRef, useState} from 'react';
import me from './../../img/Ellipse 20.png'
import {IoPersonOutline} from 'react-icons/io5'
import {LiaWalletSolid} from 'react-icons/lia'
import {SlCreditCard} from 'react-icons/sl'
import {IoChatbubbleOutline} from 'react-icons/io5'
import {BiBasket} from 'react-icons/bi'
import {IoLogOutOutline} from 'react-icons/io5'
import PhoneInput from "react-phone-input-2"
import 'react-phone-input-2/lib/style.css'
import logo from "../../img/book2.png";

const DetailIndex = () => {
    const [Number, setNumber] = useState('kg')
    const inputRef = useRef(null)
    const [image, setImage] = useState('')
    const [checkbox , setCheckbox] = useState(false)

    const handleImageClick = () => {
        inputRef.current.click()
    }
    const handleImageChange = (event) => {
        const file = event.target.files[0]
        console.log(file);
        setImage(event.target.files[0]);
    }

    return (
        <div id='detail'>
            <div className='container'>
                <div className='detail'>
                    <div className='detail--project'>
                        <div className='detail--card'>
                            <div className='detail--top'>
                                <div className='detail--tools' onClick={handleImageClick}>
                                    {image ? (<img src={URL.createObjectURL(image)} alt="" className='detail--image'/>)
                                        : (<img src={logo} alt="" className='detail--img'/>)}
                                    <input type="file" ref={inputRef} onChange={handleImageChange}
                                           style={{display: 'none'}}/>
                                    <button>Добавить фото</button>
                                </div>
                            </div>
                            <div className='detail--too'>
                                <IoPersonOutline className='text-3xl' style={{color: 'rgba(0, 0, 0, 1)'}}/>
                                <span>Выйти</span>
                            </div>
                            <div className='detail--line'></div>
                            <div className='detail--too'>
                                <LiaWalletSolid className='text-3xl' style={{color: 'rgba(0, 0, 0, 1)'}}/>
                                <span>Платежные карты</span>
                            </div>
                            <div className='detail--line'></div>
                            <div className='detail--too'>
                                <SlCreditCard className='text-3xl' style={{color: 'rgba(0, 0, 0, 1)'}}/>
                                <span>Подписки</span>
                            </div>
                            <div className='detail--line'></div>
                            <div className='detail--too'>
                                <IoChatbubbleOutline className='text-3xl' style={{color: 'rgba(0, 0, 0, 1)'}}/>
                                <span>Комментарии</span>
                            </div>
                            <div className='detail--line'></div>
                            <div className='detail--too'>
                                <BiBasket className='text-3xl' style={{color: 'rgba(0, 0, 0, 1)'}}/>
                                <span>Мои покупки</span>
                            </div>
                            <div className='detail--line'></div>
                            <div className='detail--too'>
                                <IoLogOutOutline className='text-3xl' style={{color: 'rgba(0, 0, 0, 1)'}}/>
                                <span>Выйти</span>
                            </div>
                        </div>
                        <div className='detail--npm'>
                            <div className='detail--input'>
                                <h2>Личные данные</h2>
                                <h4>ФИО</h4>
                                <input name='name' type="name" style={{padding: '0 10px'}}/>
                                <h4>Номер телефон</h4>
                                <div className='detail--phone'>
                                    <PhoneInput
                                        country={Number}
                                        placeholder='Телефон* '
                                        onChange={(value) => setNumber(value)}
                                        countryCodeEditable={true}/>
                                </div>
                                <h4>Email</h4>
                                <input name='email' type="email" style={{padding: '0 10px'}}/>
                                <div>
                                    <h4>Пол</h4>
                                    <div className='detail--car'>
                                        <div className='detail--Floor'>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginTop: '8px'
                                            }}>
                                                <input onClick={() => setCheckbox(false)} checked={!checkbox} name='checkbox' type="checkbox"
                                                       style={{width: '20px', height: '20px'}}/>
                                                <h5>Мужской</h5>
                                            </div>
                                        </div>
                                        <div className='detail--Floor'>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginTop: '8px'
                                            }}>
                                                <input onClick={() => setCheckbox(true)} checked={checkbox} name='checkbox' type="checkbox"
                                                       style={{width: '20px', height: '20px'}}/>
                                                <h5>Женский</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='detail--current'>
                                <h4>Дата рождения</h4>
                                <select className='detail--select'>
                                    <option value="US">1</option>
                                    <option value="CA">2</option>
                                    <option value="FR">3</option>
                                    <option value="DE">4</option>
                                    <option value="DE">5</option>
                                    <option value="DE">6</option>
                                    <option value="DE">7</option>
                                    <option value="DE">8</option>
                                    <option value="DE">9</option>
                                    <option value="DE">10</option>
                                    <option value="DE">11</option>
                                    <option value="DE">12</option>
                                    <option value="DE">13</option>
                                    <option value="DE">14</option>
                                    <option value="DE">15</option>
                                    <option value="DE">16</option>
                                    <option value="DE">17</option>
                                    <option value="DE">18</option>
                                    <option value="DE">19</option>
                                    <option value="DE">20</option>
                                    <option value="DE">21</option>
                                    <option value="DE">22</option>
                                    <option value="DE">23</option>
                                    <option value="DE">24</option>
                                    <option value="DE">25</option>
                                    <option value="DE">26</option>
                                    <option value="DE">27</option>
                                    <option value="DE">28</option>
                                    <option value="DE">29</option>
                                    <option value="DE">30</option>
                                    <option value="DE">31</option>
                                </select>
                                <select className='detail--hel'>
                                    <option value="CA">Январь</option>
                                    <option value="FR">Февраль</option>
                                    <option value="DE">Март</option>
                                    <option value="DE">Апрель</option>
                                    <option value="DE">Май</option>
                                    <option value="DE">Июнь</option>
                                    <option value="DE">Июль</option>
                                    <option value="DE">Август</option>
                                    <option value="DE">Сентябрь</option>
                                    <option value="DE">Октябрь</option>
                                    <option value="DE">Ноябрь</option>
                                    <option value="US">Декабрь</option>
                                </select>
                                <select className='detail--commit'>
                                    <option value="CA">2000</option>
                                    <option value="FR">2001</option>
                                    <option value="DE">2002</option>
                                    <option value="DE">2003</option>
                                    <option value="DE">2004</option>
                                    <option value="DE">2005</option>
                                    <option value="DE">2006</option>
                                    <option value="DE">2007</option>
                                    <option value="DE">2008</option>
                                    <option value="DE">2009</option>
                                    <option value="DE">2010</option>
                                    <option value="US">2011</option>
                                </select>
                                <h4>Страна</h4>
                                <select className='detail--counter'>
                                    <option value="CA">Киргизия  </option>
                                    <option value="CA">Австралия</option>
                                    <option value="FR">Австрия</option>
                                    <option value="DE">Азербайджан</option>
                                    <option value="DE">Албания</option>
                                    <option value="DE">Алжир</option>
                                    <option value="DE">Ангола</option>
                                    <option value="DE">Армения</option>
                                    <option value="DE">Белиз</option>
                                    <option value="DE">Ботсвана  </option>
                                    <option value="DE">Казахстан</option>
                                    <option value="DE">Ливан</option>
                                    <option value="US">Португалия</option>
                                    </select>
                                <h4>Город</h4>
                                <select className='detail--city'>
                                    <option value="CA">Бишкек</option>
                                    <option value="CA">Канберра</option>
                                    <option value="FR">Вено</option>
                                    <option value="DE">Баку</option>
                                    <option value="DE">Тирана</option>
                                    <option value="DE">Алжир</option>
                                    <option value="DE">Луанда</option>
                                    <option value="DE">Ереван</option>
                                    <option value="DE">Бельмопан</option>
                                    <option value="DE">Габороне</option>
                                    <option value="DE">Астана</option>
                                    <option value="DE">Бейрут</option>
                                    <option value="US">Лиссабон</option>
                                </select>
                                <h4>Род деятольности</h4>
                                <select className='detail--student'>
                                    <option value="CA">Студент</option>
                                    <option value="CA">Школьник</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailIndex;