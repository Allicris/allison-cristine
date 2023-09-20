import '../styles/Footer.css'
import github from '../../public/images/github-icon.png';
import linkedin from '../../public/images/linkedin-icon.png';
import facebook from '../../public/images/facebook-icon.png';

export default function Footer() {
  return (
    // <p> my links and icons will be here </p>
    <div className='icons'>
        <a href='https://github.com/Allicris'>
          <img src={github}></img>
        </a>
        <a href='https://www.linkedin.com/feed/'>
          <img src={linkedin}></img>
        </a>
        <a href='https://www.facebook.com/allisonbabey'>
        <img src={facebook}></img>
        </a>
      </div>
  );
}