import "../styles/Resume.css";
import resume from "../../public/resume/allison-sw-resume.pdf";
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
        My previous experience has helped me succeed in my coding journey. I've
        been able to apply my organizational and problem solving skills into my
        assignments and research. With strong background in Administration and Real Estate, I have
        enjoyed the organizational aspect and my overall confidence has grown since.
      </p>
      <button>
        <a href={resume}>View My Resume</a>
      </button>
      </div>
    </div>
  );
}
