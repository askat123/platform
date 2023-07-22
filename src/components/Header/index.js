import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../img/logo.png"
import "./index.scss"

const Header = () => {
    return (
        <div id='header'>
            <div className="container">
            <div className="header">
                <div className='header--logo'>
                <Link to="/"><img src={logo} alt="" /></Link>
                <NavLink to={"/myschool"}>О школе</NavLink>
                <NavLink to={"ourcours"}>Наши курсы</NavLink>
                <NavLink to={"/aboutus"}>О нас</NavLink>
                </div>
                <div className='header--sign'>
                    <Link>Войти</Link>
                    <button>Подписаться</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Header;