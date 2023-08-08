import React, { useContext } from "react";
import "./ Comments.scss";
import { LoginContext } from "../../Context";

const Comments = () => {
  const {login,} =useContext(LoginContext)
  return (
    <div id="comments">
      <div className="comments">
        <h1>Коментарии</h1>
        <p>Ващи коментарии</p>
        <div className="comments--block">
        <h2>{login}</h2>
        <p>{ new Date().toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
