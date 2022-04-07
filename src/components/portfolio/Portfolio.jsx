import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Meditation App",
    details: "React Native app for Meditation",
    github: "https://github.com/ronnoche/meditation-app",
    demo: "https://ron-meditationapp.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Finance Tracking App",
    details: "React Native app for Tracking Finances",
    github: "https://github.com/ronnoche/finance_tracking-app",
    demo: "https://ron-moneygerapp.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Prespond",
    details: "A responsive website for disaster relief operations.",
    github: "https://github.com/ronnoche/responsive_web",
    demo: "https://ron-prespond.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Five Simple JS Apps",
    details: "Simple 5 JavaScript games bundled in a React Website.",
    github: "https://github.com/ronnoche/games_web-app",
    demo: "https://ron-gameswebapp.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Audio Book Reader",
    details: "Book to Audio JavaScript app",
    github: "https://github.com/ronnoche/AudioBook_Reader",
    demo: "https://ron-audiobookreader.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Personal Portfolio",
    details: "This Website's Github Repo",
    github: "https://github.com/ronnoche/ronnoche-portfolio",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Learning Journey</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, details, github, demo }) => (
          <article ke={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <a href={demo} target="_blank">
                <img src={image} alt={title} />
              </a>
            </div>
            <h3>{title}</h3>
            <small className="details">
              <i>{details}</i>
            </small>
            <div className="portfolio__item-cta">
              <a href={github} target="_blank" className="btn">
                Github Repository
              </a>
              <a href={demo} target="_blank" className="btn btn-primary">
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
