// import React, { Component } from "react";
import "./style.css";
import { AiOutlineMail } from "react-icons/ai";
import { FaLocationArrow } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { BsPersonCircle } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="Contact">
      <BsPersonCircle className='personIcon'/>
      <h1  className='myName'>Abdullah Aljumah </h1>
      <h3 className='myJob'>Student in tuwaiq</h3>
      <hr />
      <p>
        <FaLocationArrow /> Qassim,Buraidah
      </p>
      <AiOutlineMail />
      <a href='#'>
         AAljumah1997@gmail.com
      </a>

      <hr />
      <a href="https://github.com/Abdullah-Aljumah" className="githubIcon">
        <AiFillGithub />
      </a>
    </div>
  );
};
export default Contact;

//AiFillGithub
