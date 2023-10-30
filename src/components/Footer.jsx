import '../styles/Footer.css'
import github from '../../public/images/github-icon.png';
import linkedin from '../../public/images/linkedin-icon.png';
import fiverr from '../../public/images/fiverr.png';

export default function Footer() {
  return (
    // <p> my links and icons will be here </p>
    <div>
    <div className='icons'>
        <a className='github' href='https://github.com/Allicris'>
          <img src={github}></img>
        </a>
        <a href='https://www.linkedin.com/feed/'>
          <img src={linkedin}></img>
        </a>
        <a className='fiverr' href='https://www.fiverr.com/s2/2418c35536'>
          <img src={fiverr}></img>
        </a>
      </div>
      <p className='footer-text'> Developed by Allison Serrano with ❤️.</p>
      </div>
  );
}