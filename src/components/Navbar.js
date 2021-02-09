import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className='navbar-title'>
          Homeless Project Maastricht
          </div>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/gibbsben.github.io/hpm' className='nav-links' onClick={closeMobileMenu}>
                <h2>Home</h2>
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/gibbsben.github.io/project'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                <h2>The Project</h2>
                
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/gibbsben.github.io/aboutUs'
                className='nav-links'
                onClick={closeMobileMenu}
              >
               <h2>About Us</h2>
              </Link>
            </li>

            {/* <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li> */}
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
