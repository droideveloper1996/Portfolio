import React, { Component } from "react";
import "./headers.scss";
import { Link, NavLink } from "react-router-dom";
const HeaderComponent = () => {
  return (
    <header>
      <div className="flex-container">
        <h1 className="title">&lt;&gt; itsabhi.me</h1>
        <div className="social">
          <a href="https://www.github.com/droideveloper1996">
            <i class="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/abhishek-kushwaha-b11b4017/">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <ul>
        <li>
          <NavLink activeClassName="active" to="/" exact={true}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/resume">Resume</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default HeaderComponent;
