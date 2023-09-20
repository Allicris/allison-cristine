import '../styles/About.css';
import selfPortrait from '../../public/images/self-portrait.png';

export default function About() {
  return (
    <div className="about-me">
      <img src={selfPortrait}></img>
      <div>
        <p>
          My name is Allison Serrano. I am based out of Bergen County, NJ.
          <br></br>
           Learning how to code has been something that was in the back of my mind for a long time. 
           <br></br>
           I'm glad that I finally have been blessed enough to learn this beautiful subject.
        </p>
      </div>
    </div>
  );
}