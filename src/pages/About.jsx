import '../styles/About.css';
import selfPortrait from '../../public/images/self-portrait.png';

export default function About() {
  return (
    <div className="about-me">
      <img src={selfPortrait}></img>
      <div>
        <p>
          Welcome to my Porfolio site! 
          <br></br>
          <br></br>
          My name is Allison Serrano. I'm based out of Bergen County, NJ. 
           <br></br>
           <br></br>
          I'm a recent graduate of Rutgers Full Stack Coding Bootcamp, web development is something that I've always been interested in and I'm so happy I took the leap to pursue it. 
          The bootcamp taught me a variety of technologies and has challenged me to consistently think outside the box and push to find a solution. The mental growth I've experienced through coding 
          is something that I'm excited to experience more of.
          </p>
      </div>
    </div>
  );
}