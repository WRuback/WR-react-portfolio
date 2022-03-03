import logo from './images/Logo.png';
import computerImg from './images/Computeredit.png';
import dewi from './images/Dewi.png';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Hero from './components/Hero';
import Header from './components/Header';

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
        return <p>Projects</p>;
      case 'Contact':
        return <p>Contact</p>;
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






