import "./index.scss";
import me from "../../img/Hello.png";
import { BsPerson } from "react-icons/bs";
import { LiaWalletSolid } from "react-icons/lia";
import { SlCreditCard } from "react-icons/sl";
import { IoChatbubbleOutline, IoLogOutOutline } from "react-icons/io5";
import { BiBasket } from "react-icons/bi";
import { useState } from "react";
import DetailIndex from "../../components/Data./Data";
import Visa from "../../components/Visa/Visa";
import Follow from "../../components/Follow/Follow";
import Comments from "../../components/ Comments/ Comments";
import Purchases from "../../components/Purchases/Purchases";
import Fflol from "../../components/ff/ff";

const Personal = () => {
  const [data, setData] = useState(1);
  const [data1, setData1] = useState(false);
  const [color, setColor] = useState(1);

  return (
    <div
      style={{ height: data === 1 || 2 || 3 ? "auto" : "800px" }}
      id="personal"
    >
      <div className="container">
        <div className="personal">
          <div>
            <div className="personal--div-personal">
              <center>
                <img src={me} alt="" />
              </center>
              <center>
                <button>Добавить фото</button>
              </center>
              <div
                onClick={() => {
                  setColor(1);
                  setData(1);
                }}
                className="personal--div-personal__div"
              >
                <BsPerson
                  style={{ color: color === 1 ? "#0272CE" : "" }}
                  className="personal--div-personal__div--icon"
                />
                <h3 style={{ color: color === 1 ? "#0272CE" : "" }}>
                  Личные данные
                </h3>
              </div>
              <div
                onClick={() => {
                  setColor(2);
                  setData(2);
                }}
                className="personal--div-personal__div1"
              >
                <LiaWalletSolid
                  style={{ color: color === 2 ? "#0272CE" : "" }}
                  className="personal--div-personal__div1--icon"
                />
                <h3 style={{ color: color === 2 ? "#0272CE" : "" }}>
                  Платежные карты
                </h3>
              </div>
              <div
                onClick={() => {
                  setColor(3);
                  setData(3);
                }}
                className="personal--div-personal__div1"
              >
                <SlCreditCard
                  style={{ color: color === 3 ? "#0272CE" : "" }}
                  className="personal--div-personal__div1--icon"
                />
                <h3 style={{ color: color === 3 ? "#0272CE" : "" }}>
                  Подписки
                </h3>
              </div>
              <div
                onClick={() => {
                  setColor(4);
                  setData(4);
                }}
                className="personal--div-personal__div1"
              >
                <IoChatbubbleOutline
                  style={{ color: color === 4 ? "#0272CE" : "" }}
                  className="personal--div-personal__div1--icon"
                />
                <h3 style={{ color: color === 4 ? "#0272CE" : "" }}>
                  Комментарии
                </h3>
              </div>
              <div
                onClick={() => {
                  setColor(5);
                  setData(5);
                }}
                className="personal--div-personal__div1"
              >
                <BiBasket
                  style={{ color: color === 5 ? "#0272CE" : "" }}
                  className="personal--div-personal__div1--icon"
                />
                <h3 style={{ color: color === 5 ? "#0272CE" : "" }}>
                  Мои покупки
                </h3>
              </div>
              <div
                onClick={() => {
                  setColor(6);
                  setData1(true);
                }}
                className="personal--div-personal__div1"
              >
                <IoLogOutOutline
                  style={{ color: color === 6 ? "#0272CE" : "" }}
                  className="personal--div-personal__div1--icon"
                />
                <h3 style={{ color: color === 6 ? "#0272CE" : "" }}>Выйти</h3>
              </div>
            </div>
            <div style={{ display: data1 ? "block" : "none" }}>
            <div id="ff">
              <div className="ff">
                <div className="ff--ff-div">
                  <center>
                    <p>
                      Действительно хотите <br />
                      выйти или нет?
                    </p>
                  </center>
                  <center>
                    <div>
                      {" "}
                      <button style={{ marginRight: "10px" }}>Да</button>{" "}
                      <button onClick={() => {
                        setData1(false)
                        setData(1)
                        setColor(1)
                      }}>Нет</button>
                    </div>
                  </center>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div style={{ display: data === 1 ? "block" : "none" }}>
            {" "}
            <DetailIndex />{" "}
          </div>
          <div style={{ display: data === 2 ? "block" : "none" }}>
            <Visa />
          </div>
          <div style={{ display: data === 3 ? "block" : "none" }}>
            <Follow />
          </div>
          <div style={{ display: data === 4 ? "block" : "none" }}>
            <Comments />
          </div>
          <div style={{ display: data === 5 ? "block" : "none" }}>
            <Purchases/>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Personal;
