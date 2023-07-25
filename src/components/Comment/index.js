import React, { useState } from "react";
import "./index.scss";
import usercom from "../../img/usercom.png";

const Comment = () => {
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const handleInputChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleSubmit = () => {
    if (commentText.trim() !== "") {
      const newComment = {
        user: "Ваше имя", // Здесь можно заменить на имя пользователя или получать из авторизации
        timestamp: new Date().toLocaleString(),
        text: commentText,
      };

      setComments((prevComments) => [...prevComments, newComment]);
      setCommentText("");
    }
  };

  return (
    <div id="comment">
      <div className="container">
        <div className="comment">
          <div className="comment--input">
            <input
              type="text"
              placeholder="Ваш комментарий"
              value={commentText}
              onChange={handleInputChange}
            />
            <button onClick={handleSubmit}>Отправить</button>
          </div>
          <div className="comment--text">
            {comments.map((comment, index) => (
              <div className="comment--text__user" key={index}>
                <img src={usercom} alt="" />
                <div>
                  <h4>
                    {comment.user} / <span>{comment.timestamp}</span>
                  </h4>
                  <p>{comment.text}</p>
                  <button>Ответить</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
