import { Link, useLocation } from 'react-router-dom';

//Importing Link and useLocation to be able to create routes.
//When a nav tab is clicked it will take you to that route

function NavTabs() {
  const currentPage = useLocation().pathname;

  return(
    <ul>
      {/* <li>
        <Link
        to='/'
        className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
      </li> */}
      <li className='nav-item'>
        <Link
        to='/About'
        className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </li>
      <li className='nav-item'>
        <Link
        to='/Portfolio'
        className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className='nav-item'>
        <Link
        to='/Resume'
        className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
      <li className='nav-item'>
        <Link
        to='/Contact'
        className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default NavTabs;