import React from "react";
import { Link } from "react-router-dom";
import "./index.scss"
import logo from "../../img/logo.png"
import { BsInstagram } from 'react-icons/bs';
import { AiOutlineYoutube } from 'react-icons/ai';
import { PiFacebookLogo } from 'react-icons/pi';
import { FiTwitter } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';
import { LiaTelegramPlane } from 'react-icons/lia';
import { RxEnvelopeClosed } from 'react-icons/rx';
import { BsTelephone } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer">
          <div className="footer--logo">
            <Link>
              <img src={logo} alt="" />
            </Link>
            <div>
              <button>KG</button>
              <button>RU</button>
            </div>
          </div>
          <div className="footer--about">
            <h3>Быстрые ссылки</h3>
            <Link>О школе</Link>
            <Link>Наши курсы</Link>
            <Link>О нас</Link>
          </div>
          <div className="footer--social">
            <h3>Социальные сети</h3>
            <div className="footer--social__icon">
              <BsInstagram />
              <AiOutlineYoutube />
              <PiFacebookLogo />
            </div>
            <div className="footer--social__icon">
              <FiTwitter />
              <FaTiktok />
              <LiaTelegramPlane />
            </div>
          </div>
          <div className="footer--contacts">
            <h3>Контакты</h3>
            <a href="@motionwebteam@gmail.com">
              <RxEnvelopeClosed />
              @motionwebteam@gmail.com
            </a>
            <a href="" tel={+996559692626}>
              <BsTelephone />
              +996 559 - 69 - 26 - 26
            </a>
          </div>
          <div className="footer--address">
            <h3>Адреса</h3>
            <p>
              <FiMapPin style={{paddingRight: "10px"}}/>
              Турусбекова 109 / 3
            </p>
            <p>
            Идентификационный<br /> код: 1234567890
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
