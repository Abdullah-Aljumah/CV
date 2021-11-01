// import React, { Component } from "react";
import "./style.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="Contact">
      <h1>Abdullah Aljumah </h1>
      <h3>Student in tuwaiq</h3>
      <hr />
      <p>
        <FaLocationArrow /> Qassim,Buraidah
      </p>

      <p>
        <AiOutlineMail /> AAljumah1997@gmail.com
      </p>

      <hr />
      <a href="https://github.com/Abdullah-Aljumah" className="githubIcon">
        <AiFillGithub />
      </a>
    </div>
  );
};
export default Contact;

//AiFillGithub
