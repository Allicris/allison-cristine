import "../styles/About.css";
import Header from "../components/Header";

export default function About() {

  return (
    <div id="about-me" className="about-me">
      <Header />
      <div className="paragraph-one">
        <p>
          I'm a full-stack developer based in Bergen County, New Jersey. I
          thrive on the mental stimulation of designing beautiful websites,
          problem-solving and writing clean efficient code.
        </p>
      </div>
      <div className="paragraph-two">
        <p>
          If you want to know more about me and my journey into Software
          Engineering
        </p>
        <p>
          <a href="https://coderalli.hashnode.dev/my-coding-journey">click here</a>
        </p>
      </div>
    </div>
  );
}
