import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../styles/Portfolio.css";
import ecostore from "../../public/images/eco-store.png";
import nailbookings from "../../public/images/maa-nail-haven.png";
import adopt from "../../public/images/adopt-a-pet.png";
import newspaper from "../../public/images/digital-newspaper.png";
import finance from "../../public/images/financial-logger.png";
import weather from "../../public/images/weather-app.png";
import quiz from "../../public/images/js-quiz.png";
import priscilla from "../../public/images/priscillas-nails.png";

export default function Portfolio() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="portfolio" className="mywork">
      <h1>Collaborative Projects</h1>
      <Carousel className="collaborative-projects" responsive={responsive}>
        <div className="project">
          <h2>Eco Friendly E-Commerce Store</h2>
          <img className="images" src={ecostore} alt="Eco Store" />
          <div className="project-links">
            <a href="https://github.com/NigelDcruz/ecostorereact">
              Github Repo
            </a>
            {/* <a href="https://allicris.github.io/digital-newspaper/">
              Website link
            </a> */}
          </div>
          <div className="description">
            <p>
              COMING SOON! An Eco-Friendly E-Commerce Store where users can log
              in and shop for favorite organic foods and eco-friendly products.
            </p>
            <p>
              <em>Technologies Used:</em> MERN Stack, JWT, Tailwind CSS.
            </p>
          </div>
        </div>
        <div className="project">
          <h2>M.A.A. Nail Haven</h2>
          <img
            className="images"
            src={nailbookings}
            alt="Nail Booking Site Screenshot"
          ></img>
          <div className="project-links">
            <a href="https://github.com/Allicris/nail-booking-site">
              Github Repo
            </a>
            <a href="https://nail-booking-site-285746c99724.herokuapp.com">
              Website Link
            </a>
          </div>
          <div className="description">
            <p>
              A nail booking site where a user can log into and create
              appointments by selecting a service, time and date. The user can
              also view their saved appointments.{" "}
            </p>
            <p>
              <em>Technologies Used:</em> MERN Stack, JWT, Apollo, GraphQL
              Bootstrap, Heroku.
            </p>
          </div>
        </div>

        <div className="project">
          <h2>Adopt A Pet</h2>
          <img className="images" src={adopt} alt="Adopt A Pet Screenshot" />
          <div className="project-links">
            <a href="https://github.com/Allicris/project-two">Github Repo</a>
            <a href="https://project-two-20323fc10aa2.herokuapp.com">
              Website Link
            </a>
          </div>
          <div className="description">
            <p>
              A website where a user can sign in and search the company’s site
              for a dog or cat they would like to adopt.
            </p>
            <p>
              <em>Technologies Used:</em> HTML, CSS, JavaScript, MySQL,
              Sequelize, Node.js, Express.js, Authentication.
            </p>
          </div>
        </div>

        <div className="project">
          <h2>Digital Newspaper</h2>
          <img
            className="images"
            src={newspaper}
            alt="Digital Newspaper Screenshot"
          />
          <div className="project-links">
            <a href="https://github.com/Allicris/digital-newspaper">
              Github Repo
            </a>
            <a href="https://allicris.github.io/digital-newspaper/">
              Website Link
            </a>
          </div>
          <div className="description">
            <p>
              A website where you can look up articles from any point in time
              including the present. A GIF will match the displayed articles to
              make your learning and research experience more enjoyable.{" "}
            </p>
            <p>
              <em>Technologies Used:</em> HTML, JavaScript, Bulma CSS Framework,
              New York Times Articles API, Giphy API.
            </p>
          </div>
        </div>
      </Carousel>

      <div className="mywork">
        <h1>Solo Projects</h1>
        <Carousel className="solo-projects" responsive={responsive}>
          <div className="project">
            <h2>Financial Logger</h2>
            <img
              className="images"
              src={finance}
              alt="Financial Logging Website"
            />
            <div className="project-links">
              <a href="https://github.com/Allicris/financial-logger">
                Github Repo
              </a>
              {/* <a href="https://allicris.github.io/programmer-quiz/">
              Website link
            </a> */}
            </div>
            <div className="description">
              <p>
                A personal book keeping website where a user can sign in and
                record their monthly expenses to better budget themselves.{" "}
              </p>
              <p>
                <em>Technologies Used:</em> MERN Stack, Apollo, GraphQL, JWT,
                Tailwind CSS.
              </p>
            </div>
          </div>

          <div className="project">
            <h2>Sky Canva Weather App</h2>
            <img
              className="images"
              src={weather}
              alt="Weather App Screenshot"
            />
            <div className="project-links">
              <a href="https://github.com/Allicris/new-weather-app">
                Github Repo
              </a>
              <a href="https://allicris.github.io/new-weather-app/">
                Website Link
              </a>
            </div>
            <div className="description">
              <p>
                A weather application used for the purpose of looking up the
                current weather and future five day forecast for any city in the
                world.
              </p>
              <p>
                <em>Technologies Used:</em> HTML, CSS, JavaScript, Open Weather
                API’s.
              </p>
            </div>
          </div>

          <div className="project">
            <h2>Javascript Timed Quiz</h2>
            <img
              className="images"
              src={quiz}
              alt="JavaScript Quiz Screenshot"
            />
            <div className="project-links">
              <a href="https://github.com/Allicris/programmer-quiz">
                Github Repo
              </a>
              <a href="https://allicris.github.io/programmer-quiz/">
                Website Link
              </a>
            </div>
            <div className="description">
              <p>
                A timed quiz that can be used to test your knowledge of
                JavaScript concepts and syntax. At the end of the quiz, you will
                receive a score based on how many answers you answered
                correctly.{" "}
              </p>
              <p>
                <em>Technologies Used:</em> HTML, CSS, JavaScript.
              </p>
            </div>
          </div>

          <div className="project">
            <h2>Priscilla's Nails</h2>
            <img className="images" src={priscilla} alt="Priscilla's Nails" />
            <div className="project-links">
              <a href="https://github.com/Allicris/pricillasnails">
                Github Repo
              </a>
              <a href="https://priscillasxnails.netlify.app">Website Link</a>
            </div>
            <div className="description">
              <p>
                A simple landing page I made for my sister's nail business.{" "}
              </p>
              <p>
                <em>Technologies Used:</em> React, CSS, JavaScript.
              </p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
