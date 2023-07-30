import React from 'react';
import img from '../../img/master-hr.png';
import './index.scss';

const MasterHr = () => {
    return (
        <div id="spider">
            <div className="container">
                <h1>ПРОГРАММА МАСТЕР-КЛАССА </h1>
                <div style={{marginBottom:'150px'}} className="spider">
                    <div className="spider--right">
                        <div className="spider--right__btn">
                            <h2> 1</h2>
                            <h3>Reactivity</h3>
                        </div>
                        <div className="spider--right__btn">
                            <h2> 2</h2>
                            <h3></h3>
                        </div>
                        <div className="spider--right__btn">
                            <h2> 3</h2>
                            <h3>Observable example</h3>
                        </div>
                        <div className="spider--right__btn">
                            <h2> 4</h2>
                            <h3>Implementing and subscribing to an observer</h3>
                        </div>
                        <div className="spider--right__btn">
                            <h2> 5</h2>
                            <h3>Reactive Streams spec</h3>
                        </div>
                        <button className="spider--right__btn--button">Купить мастер-класс </button>
                    </div>
                    <div className="spider--left">
                        <img src={img} width={450} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MasterHr;