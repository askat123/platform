import React from 'react';
import img from '../../img/master-img.png'
import './index.scss';

const MasterS = () => {
    return (
        <div id="masterS">
            <div className="container">
                <div style={{marginBottom: '200px'}}  className="masterS">
                    <center><img src={img} alt="" /></center>
                    <center><p>Мастер класс ведет</p></center>
                    <center><h1>Евгений Александрович</h1></center>
                    <center><h5> Frontend developer / Аратор </h5></center>
                </div>
            </div>
        </div>
    );
};

export default MasterS;