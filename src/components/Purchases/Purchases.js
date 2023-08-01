import React from 'react';
import './Purchases.scss';


const Purchases = () => {
    return (
        <div id="purchases">
            <div className="purchases">
                <h1>Мои покупки</h1>
                <div className="purchases--purchases-div">
                    <p>Дата</p>
                    <p>Описание</p>
                    <p>Цена</p>
                </div>
                <div className="purchases--purchases-div1">
                    <p>02.05.2022 г.</p>
                    <p style={{marginRight:'90px'}}>Год</p>
                    <p>545 $</p>
                </div><div className="purchases--purchases-div1">
                    <p>02.05.2022 г.</p>
                    <p style={{marginRight:'90px'}}>Год</p>
                    <p>545 $</p>
                </div>
            </div>
        </div>
    );
};

export default Purchases;