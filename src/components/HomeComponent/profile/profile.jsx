import React, { Component, useEffect, useState } from "react";
import "./profile.scss";

var txt = "Hi, I am Abhishek Kushwaha, Full Stack Developer";
const skills = [
  "Android",
  "Flutter",
  "Angular",
  "React",
  "Node.js",
  "IoT",
  "MongoDB",
  "PHP",
  "Python",
  "AWS",
  "Firebase",
];

var speed = 70;
var i = 0;
var j = 0;
var k = 0;

const divRef = React.createRef();

const _ProfileHeader = () => {
  const [skill, setSkill] = useState([]);
  useEffect(() => {
    typeWriterEffect();
  }, []);

  useEffect(() => {
    setSkill(skill);
  }, [skill]);

  const typeWriterEffect = () => {
    typeWriter1();
    setTimeout(() => {
      typeWriter2();
      setTimeout(() => {
        showSkills();
      }, 6500);
    }, 5000);
  };

  function typeWriter1() {
    if (i < txt.length) {
      document.getElementById("demo1").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter1, speed);
    }
  }

  const typeWriter2 = (id) => {
    const msg =
      "I have 5+ years of Experience in building scalable applications, having hands on to ";
    if (j < msg.length) {
      document.getElementById("demo2").innerHTML += msg.charAt(j);
      j++;
      setTimeout(typeWriter2, speed);
    }
  };

  const showSkills = () => {
    if (k < skills.length) {
      setSkill((prev) => {
        return [...prev, skills[k]];
      });
      k++;
      setTimeout(showSkills, 90);
    }
  };
  return (
    <div className="row">
      <div className="col-8">
        <h1 id="demo1"></h1>
        <h3 id="demo2"></h3>
        <div className="skills">
          {skill.map((item) => (
            <Pill data={item}></Pill>
          ))}
        </div>
      </div>
      <div className="col-4">
        <div className="round-image"></div>
        <div className="info">
          <h4>
            <h2>Abhishek Kushwaha</h2>
            <h4>
              Founder <a href="https://www.senspark.io">senspark.io</a>
            </h4>
            <h4>
              <i class="fas fa-map-marker-alt"></i> &nbsp;Kanpur,
              UttarPradesh(India)
            </h4>
          </h4>
        </div>
      </div>
    </div>
  );
};

export const Pill = (props) => {
  return <div className="pills">{props.data}</div>;
};

export default _ProfileHeader;
