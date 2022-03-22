import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Picture" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>&lt;1 year as dev</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          {/* closing div of about__cards  */}
          <p>
            A self-taught programmer focused on web application development
            using ReactJS with a demonstrable history of continuous self-driven
            learning and strategic problem-solving skills through systems
            thinking. Advocates for positive wellbeing, personal growth, and the
            next generation. A stoic and a minimalist.
          </p>

          <a href="#contact" class="btn btn-primary">
            Say hi!
          </a>
        </div>
        {/* closing div of about__content */}
      </div>
      {/* closing div of container */}
    </section>
  );
};

export default About;
