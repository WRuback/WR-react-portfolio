import React from 'react';

export default function Header({ logo, navClick }) {
  // Tracks wether the burger is open or not.
  const [isActive, setisActive] = React.useState(false);

  // Sets the page navigation and closes the burger.
  function burger(page) {
    navClick(page);
    setisActive(false);
  }

  return (<nav className="navbar is-dark" style={{
    backgroundColor: "purple"
  }} role="navigation" aria-label="main navigation">
    
    <div className="navbar-brand">
      <a className="navbar-item" href='#AboutMe' onClick={() => burger('About Me')}>
        <img src={logo} alt="William Ruback" />
      </a>

      <button className={`navbar-burger ${isActive ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" onClick={() => setisActive(!isActive)} data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>

    <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
      <div className="navbar-end">
        <a className="navbar-item" href='#AboutMe' onClick={() => burger('About Me')}>
          About Me
        </a>
        <a className="navbar-item" href='#Projects' onClick={() => burger('Portfolio')}>
          Portfolio
        </a>
        <a className="navbar-item" href='#Contact' onClick={() => burger('Contact')}>
          Contact
        </a>
        <a className="navbar-item" href='#Resume' onClick={() => burger('Resume')}>
          Resume
        </a>
      </div>
    </div>
  </nav>);
}