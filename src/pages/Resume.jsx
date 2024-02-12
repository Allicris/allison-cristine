import "../styles/Resume.css";
import resume from "../../public/resume/allison-serrano.pdf";
import selfPortrait from "../../public/images/portfolio-pic.png";

export default function Resume() {
  return (
    <div id="resume" className="resume">
      <div className="portrait">
        <img src={selfPortrait}></img>
      </div>
      <div className="resume-description">
        <h3>EXPERIENCE</h3>
        <p>
        My previous experience has led me to where I am today in my coding journey. I've
        been able to apply my organizational and problem solving skills into my
        assignments and research. I plan to utilize the skills I have gained in Administration and Real Estate to become a better web developer.
      </p>
      <button>
        <a href={resume}>View My Resume</a>
      </button>
      </div>
    </div>
  );
}
