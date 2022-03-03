import React from 'react';

export default function Header({ logo, navClick }) {
  return (<nav className="navbar is-dark" style={{
    backgroundColor: "purple"
  }} role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <a className="navbar-item" href='#AboutMe' onClick={() => navClick('About Me')}>
        <img src={logo} alt="William Ruback" />
      </a>

      <button className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </button>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">

      </div>

      <div className="navbar-end">
        <a className="navbar-item" href='#AboutMe' onClick={() => navClick('About Me')}>
          About Me
        </a>
        <a className="navbar-item" href='#Projects' onClick={() => navClick('Projects')}>
          Projects
        </a>
        <a className="navbar-item" href='#Contact' onClick={() => navClick('Contact')}>
          Contact
        </a>
        <a className="navbar-item" href='https://drive.google.com/file/d/1Cl_1MgX_N5v5Ma80VtvC89GNuSoVQApk/view?usp=sharing' target="_blank" rel="noreferrer noopener">
          Resume
        </a>
      </div>
    </div>
  </nav>);
}
