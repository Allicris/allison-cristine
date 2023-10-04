import '../styles/Portfolio.css';
import weather from '../../public/images/weather.png';
import newspaper from '../../public/images/newspaper.png';
import adopt from '../../public/images/adopt.png';
import portfolio from '../../public/images/portfolio.png';
import quiz from '../../public/images/quiz.png';
import workday from '../../public/images/workday.png';
import nailbookings from '../../public/images/nailbookings.png';

export default function Portfolio() {
  return (
    <div className='mywork'>
      <h1>My Work
      </h1>
      <section className='projects'>
        <div>
          <h2>
            Weather App
          </h2>
          <img className='images' src={weather}></img>
          <br></br>
          <a href='https://github.com/Allicris/new-weather-app'>Github link</a>
          <br></br>
          <a href='https://allicris.github.io/new-weather-app/'>Website link</a>
        </div>
        <div>
          <h2>
            Digital Newspaper Website
          </h2>
          <img className='images' src={newspaper}></img>
          <br></br>
          <a href='https://github.com/Allicris/digital-newspaper'>Github link</a>
          <br></br>
          <a href='https://allicris.github.io/digital-newspaper/'>Website link</a>
        </div>
        <div>
          <h2>
            Adopt A Pet Website
          </h2>
          <img className='images' src={adopt}></img>
          <br></br>
          <a href='https://github.com/Allicris/project-two'>Github link</a>
          <br></br>
          <a href='https://project-two-20323fc10aa2.herokuapp.com'>Website link</a>
        </div>
        <div>
          <h2>
            Static Portfolio
          </h2>
          <img className='images' src={portfolio}></img>
          <br></br>
          <a href='https://github.com/Allicris/allisons-portfilio'>Github link</a>
          <br></br>
          <a href='https://allicris.github.io/allisons-portfilio/'>Website link</a>
        </div>
        <div>
          <h2>
            Javascript Timed Quiz
          </h2>
          <img className='images' src={quiz}></img>
          <br></br>
          <a href='https://github.com/Allicris/programmer-quiz'>Github link</a>
          <br></br>
          <a href='https://allicris.github.io/programmer-quiz/'>Website link</a>
        </div>
        <div>
          <h2>
            Work Day Calendar
          </h2>
          <img className='images' src={workday}></img>
          <br></br>
          <a href='https://github.com/Allicris/work-day-calendar'>Github link</a>
          <br></br>
          <a href='https://allicris.github.io/work-day-calendar/'>Website link</a>
        </div>
        <div>
          <h2>
            Nail Booking Site
          </h2>
          <img className='images' src={nailbookings}></img>
          <br></br>
          <a href='https://github.com/Allicris/nail-booking-site'>Github link</a>
          <br></br>
          <a href='https://nail-booking-site-285746c99724.herokuapp.com'>Heroku link</a>
        </div>
      </section>
    </div>
  );
}