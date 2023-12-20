import '../styles/Resume.css';
import html from '../../public/images/html.png';
import css from '../../public/images/css.png';
import javascript from '../../public/images/javascript.png';
import jquery from '../../public/images/jquery.png';
import mysql from '../../public/images/mysql.png';
import git from '../../public/images/git.png';
import mongo from '../../public/images/mongo.png';
import react from '../../public/images/react.png';
import npm from '../../public/images/npm.png';
import resume from '../../public/resume/allison-sw-resume.pdf';

export default function Resume() {
  return (
    <div className='resume'>
      <p>My previous experience has helped me succeed in my coding journey. I've been able to apply my organizational and problem solving skills into my assignments and research.</p>
      <p>I have a strong background in Administration and Real Estate. I have enjoyed the organizational aspect of the Administraion responsibilities and my overall confidence has grown since starting Real Estate.</p>
      <br></br>
      <p>Review my experience below.</p>
      <button>
        <a href={resume}> View My Resume</a>
      </button>
      <div className='languages'>
      <img src={html}></img>
      <img src={css}></img>
      <img src={javascript}></img>
      <img src={jquery}></img>
      <img src={mysql}></img>
      <img src={git}></img>
      <img src={mongo}></img>
      <img src={react}></img>
      <img src={npm}></img>
      </div>
      </div>
  );
}