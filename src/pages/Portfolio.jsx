import '../styles/Portfolio.css';
import weather from '../../public/images/weather.png';
import newspaper from '../../public/images/newspaper.png';
import adopt from '../../public/images/adopt.png';
import quiz from '../../public/images/quiz.png';
import nailbookings from '../../public/images/nailbookings.png';

export default function Portfolio() {
  return (
    <div className='mywork'>
      <h1>My Work
      </h1>
      <div className='projects'>

        <div className='project'>
          <h2>
            Nail Booking Site
          </h2>
          <img className='images' src={nailbookings} alt='Nail Booking Site Screenshot'></img>
          <div className='project-links'>
            <a href='https://github.com/Allicris/nail-booking-site'>Github link</a>
            <a href='https://nail-booking-site-285746c99724.herokuapp.com'>Website link</a>
          </div>
          <div className='description'>
          <p>
            A nail booking site that a user can log into and create an appointment by selecting a service, time and date. The user can also view their booked appointments.          </p>
          <p>
          <em>Technologies Used:</em> React, React DOM, React Bootstrap, React Router, MongoDB and Mongoose ODM, JSONWebToken, Apollo, GraphQL.
          </p>
          </div>
        </div>

        <div className='project'>
          <h2>
            Adopt A Pet Website
          </h2>
          <img className='images' src={adopt} alt='Adopt A Pet Screenshot' />
          <div className='project-links'>
            <a href='https://github.com/Allicris/project-two'>Github link</a>
            <a href='https://project-two-20323fc10aa2.herokuapp.com'>Website link</a>
          </div>
          <div className='description'>
          <p>
            A website where a user can sign in and search the company’s site for a dog or cat they would like to adopt.
          </p>
          <p>
          <em>Technologies Used:</em> HTML, CSS, JavaScript, MVC, MySQL, Sequelize, Node.js, Express.js, RESTful API’s, Authentication, Day.js.
          </p>
          </div>
        </div>

        <div className='project'>
          <h2>
            Weather App
          </h2>
          <img className='images' src={weather} alt='Weather App Screenshot' />
          <div className='project-links'>
            <a href='https://github.com/Allicris/new-weather-app'>Github link</a>
            <a href='https://allicris.github.io/new-weather-app/'>Website link</a>
          </div>
          <div className='description'>
          <p>
            A weather application used for the purpose of looking up the current weather and future five day forecast for any city in the world. Two API’s from OpenWeather were used to save and display data.
          </p>
          <p>
          <em>Technologies Used:</em> HTML, CSS, JavaScript, Github, Local Storage, Open Weather API’s
          </p>
          </div>
        </div>

        <div className='project'>
          <h2>
            Digital Newspaper Website
          </h2>
          <img className='images' src={newspaper} alt='Digital Newspaper Screenshot' />
          <div className='project-links'>
            <a href='https://github.com/Allicris/digital-newspaper'>Github link</a>
            <a href='https://allicris.github.io/digital-newspaper/'>Website link</a>
          </div>
          <div className='description'>
          <p>
            A website where you can look up articles from any point in time including the present. A GIF will match the displayed articles to make your learning and research experience more enjoyable.          </p>
          <p>
          <em>Technologies Used:</em> HTML, JavaScript, Bulma CSS Framework, New York Times Articles API, Giphy API.
          </p>
          </div>
        </div>

        <div className='project'>
          <h2>
            Javascript Timed Quiz
          </h2>
          <img className='images' src={quiz} alt='JavaScript Quiz Screenshot' />
          <div className='project-links'>
            <a href='https://github.com/Allicris/programmer-quiz'>Github link</a>
            <a href='https://allicris.github.io/programmer-quiz/'>Website link</a>
          </div>
          <div className='description'>
          <p>
            A timed quiz that can be used to test your knowledge of JavaScript concepts and syntax. At the end of the quiz, you will receive a score based on how many answers you answered correctly.          </p>
          <p>
            <em>Technologies Used:</em> HTML, CSS, JavaScript, Github, Local Storage.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}