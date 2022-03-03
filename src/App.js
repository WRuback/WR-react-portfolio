import logo from './images/Logo.png';
import computerImg from './images/Computeredit.png';
import dewi from './images/Dewi.png';
import React from 'react';

function App() {
  return (
    <>
      <nav className="navbar is-dark" style={{ backgroundColor: "purple" }} role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
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
            <button className="navbar-item">
              Home
            </button>
            <button className="navbar-item">
              Projects
            </button>
            <button className="navbar-item">
              Contact
            </button>
            <button className="navbar-item">
              Resume
            </button>
          </div>
        </div>
      </nav>
      <section class="hero is-medium is-link" style={{ backgroundColor: "indigo", position: "relative" }}>
        <img src={computerImg} alt="Computer Graphic" style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", maxWidth: "60%", maxHeight: "100%" }} />
        <div class="hero-body has-text-right" style={{ zIndex: 1 }}>

          <img src={logo} alt="William Ruback" />
          <p class="subtitle">
            Full-Stack Web Developer
          </p>
        </div>
      </section>
      <section className='container columns mx-auto'>
        <div className='box block has-text-white is-two-thirds m-5' style={{ backgroundColor: "purple" }}>
          <h2 className='title has-text-white'>About Me</h2>
          <hr></hr>
          <p>Hello! My name is William Ruback. I am currently learning full stack web development thanks to the UCF Coding Bootcamp program. I am becoming proficient in the use of HTML, CSS, and Javascript for the use of front-end web development, and will soon be learning server backend as well. In addition, I am also proficient in designing motion graphics and visuals effects with after effects, 3D work with blender, and photo editing with Adobe Photoshop. I also have video editing experience using Adobe Premerie Pro, and additional experience working on professional sets as a grip. Below are some examples of my web development work. More will be coming soon!</p>
        </div>
        <div className='card has-text-white is-one-third m-5' style={{ backgroundColor: "purple" }}>
          <div className='card-header'>
            <p class="card-header-title has-text-white">
              Featured Project : Dewi
            </p>
          </div>
          <div className='card-image'>
            <img src={dewi} alt="William Ruback" />
          </div>
          <div className='card-content'>
            <p>A Single Page web application that let's you search a wide varity of books with a series of tags. You can then create a user account and save your favorite books your shelf!</p>
          </div>
          <footer className="card-footer">
            <a href="https://dewi-library.herokuapp.com/" class="card-footer-item">App</a>
            <a href="https://github.com/EzequielMejiasMelo/dewi" class="card-footer-item">Github</a>
          </footer>
        </div>
      </section>
      <footer class="footer" style={{ backgroundColor: "indigo" }}>
        <div class="content has-text-centered has-text-white">
          <p>
            &copy; 2022 William Ruback. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
