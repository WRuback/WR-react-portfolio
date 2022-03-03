import logo from './images/Logo.png';
import computerImg from './images/Computeredit.png';
import dewi from './images/Dewi.png';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Homepage from './components/AboutMe';
import Hero from './components/Hero';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

function App() {
  let [page, setPage] = useState('About Me');

  function navClick(newPage) {
    setPage(newPage);
  };

  function renderPage() {
    switch (page) {
      case 'About Me':
        return (<>
          <Hero computerImg={computerImg} logo={logo} />
          <Homepage featureImg={dewi} />
        </>);
      case 'Projects':
        return (<>
          <Hero computerImg={computerImg} logo={logo} />
          <Portfolio />
        </>);
      case 'Contact':
        return (<section className='section'>
          <h1 className='title is-1 has-text-centered has-text-warning mx-auto'>Contact Me</h1>
          <div className='box'>
            <form>
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Text input" />
                </div>
              </div>
              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" type="text" placeholder="Text input" />
                </div>
              </div>
              <div class="field">
                <label class="label">Message</label>
                <div class="control">
                  <textarea class="textarea" type="textarea" placeholder="Your Message" />
                </div>
              </div>
              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-link">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </section>);
      default:
        return <p>Unknown Page</p>;
    }
  }
  return (
    <>
      <Header logo={logo} navClick={navClick} />
      {renderPage()}
      <Footer />
    </>
  );
}

export default App;







