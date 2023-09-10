import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";
import IMG7 from "../../assets/portfolio7.png";
import IMG8 from "../../assets/portfolio8.png";
import IMG9 from "../../assets/shoping app.png";
const data = [
  {
    id: 1,
    image: IMG1,
    title: "E-commerce Website Amazon Clone ",
    github: "https://github.com/tribanj",
    demo: "https://amazonlandingpagecss.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Resturent Website ",
    github: "https://github.com/tribanj",
    demo: "https://restauhotel.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "New Visual of GPT 3.O Website",
    github: "https://github.com/tribanj",
    demo: "https://gpt3point0.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "React Portfolio Design",
    github: "https://github.com/tribanj",
    demo: "https://reactportfoliodesign.netlify.app/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Room Renting Website (Full Stack)",
    github: "https://github.com/tribanj",
    demo: "https://room-marketplace.netlify.app/",
  },
  {
    id: 6,
    image: IMG6,
    title: "Hotel Renting Site Design",
    github: "https://github.com/tribanj",
    demo: "https://tribhuwan-first-react-project.netlify.app/",
  },
  {
    id: 7,
    image: IMG7,
    title: "Personal Portfolio",
    github: "https://github.com/tribanj",
    demo: "https://github.com/tribanj/restaurant",
  },
  {
    id: 8,
    image: IMG8,
    title: "Name Suggestion application",
    github: "https://github.com/tribanj",
    demo: "https://name-suggesting-application.netlify.app/",
  },
  {
    id: 9,
    image: IMG9,
    title: "Online shoping Application",
    github: "https://github.com/tribanj",
    demo: "https://electricworld.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary" target="_blank" rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
