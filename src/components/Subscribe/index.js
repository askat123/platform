import React from 'react';
import { Link } from 'react-router-dom';
import "./index.scss"



const Subscribe = () => {
    return (
        <div id='subscribe'>
            <div className="container">
                <div className="subscribe">
                    <div className="subscribe--title">
                        <h2>Подпишитесь сейчас за 19,00 $ / мес</h2>
                        <p>И получите доступ к материалам и кейсам, а также к новым <br/> мастер-классам </p>
                    </div>
                    <div className="subscribe--btn">
                        <button>Оформить подписку</button>
                        <Link to={"/package"}>Подробнее о пакетах</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;