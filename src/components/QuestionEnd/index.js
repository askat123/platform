import React, { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import "./index.scss";
import task from "../../img/image 9.png";

const questionsData = [
  {
    question: "Что такое зарезервированные слова в программировании?",
    answer:
      "Зарезервированные слова — это слова и символы, которые имеют особое значение в программировании и не могут быть использованы в качестве имен переменных, функций и т.п.",
  },
  {
    question: "Могу ли я отказаться от автопродления подписки?",
    answer:
      "Возможность отказаться от автопродления подписки зависит от условий подписки или лицензии. Некоторые платформы позволяют отменить автопродление, а другие нет. Рекомендуется ознакомиться с правилами платформы, на которой вы совершили подписку.",
  },
  {
    question: "Могу ли я вернуть деньги?",
    answer:
      "Возврат денег за покупку зависит от политики возврата продавца или платформы, на которой вы совершили покупку. Обратитесь в службу поддержки для получения информации о процедуре возврата.",
  },
  {
    question: "Какие направление в IT самые актуальные",
    answer:
      "lorem20csdcjkn ckdnksjedcdejc kjwenckjcdc kjnedcksjdencjsnc kjskdnckjsdncjk ksjdnckjsd ksjdcnk jksdnckjs ksjdnckjs ksjdnck",
  },
  {
    question:
      " Нужно ли учить другой язык программирования, перед изучением языка С++",
    answer:
      "Возврат денег за покупку зависит от политики возврата продавца или платформы, на которой вы совершили покупку. Обратитесь в службу поддержки для получения информации о процедуре возврата.",
  },
  {
    question: "Платформа обнавляется?    ",
    answer: "Как я могу получить доступ ка всем курсом",
  },
];

const QuestionEnd = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div id="accordion">
      <div className="container">
        <div className="accordion">
          <div className="accordion--text">
            <h1>Остались <br />вопросы?</h1>
            <img src={task} alt="" />
          </div>
          <div className="accordion--container">
            {questionsData.map((item, index) => (
              <div className="accordion--container__item" key={index}>
                <div
                  className="accordion-header"
                  onClick={() => handleAccordionClick(index)}
                >
                  <h3>{item.question}</h3>
                  {activeIndex === index ? <BiChevronUp /> : <BiChevronDown />}
                </div>
                  <div className="line"></div>

                {activeIndex === index && (
                  <div className="accordion-content"><p>{item.answer}</p></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionEnd;
