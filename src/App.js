import logo from './images/Logo.png';
import computerImg from './images/Computeredit.png';

import fireChair from './images/FireChair.jpg';
import heroImg from './images/Hero.png';
import portfolioIMG from './images/Portfolio.png';
import contactIMG from './images/Contact.png';
import resumeIMG from './images/Resume.png';

import React, { useState } from 'react';

import Footer from './components/Footer';
import AboutMe from './components/AboutMe';
import Hero from './components/Hero';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';
import Resume from './components/Resume';
import PageTitle from './components/PageTitle';

function App() {
  let [page, setPage] = useState('About Me');
  
  // These contact states are saved here so they persist on page changes.
  let [contactName, setContactName] = useState('');
  let [email, setEmail] = useState('');
  let [message, setMessage] = useState('');
  
  // Sets the page for the user clicking on the header navbar.
  function navClick(newPage) {
    setPage(newPage);
  };

  // Sets the changes on the contact states.
  function handleChange(e) {
    switch (e.target.name) {
      case "name":
        setContactName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;
      default:
        break;
    }

  };

  // Selects which page to render.
  function renderPage() {
    switch (page) {
      case 'About Me':
        return (<>
          <Hero computerImg={computerImg} logo={logo} heroImg={heroImg} />
          <AboutMe featureImg={fireChair} />
        </>);
      case 'Portfolio':
        return (<>
          <PageTitle heroImg={heroImg} titleIMG={portfolioIMG} subtitle={'Projects Showcasing My Technical Abilities'}/>
          <Portfolio />
        </>);
      case 'Contact':
        return (<>
          <PageTitle heroImg={heroImg} titleIMG={contactIMG} subtitle={'Currently Available for Any Project'}/>
          <ContactMe contactName={contactName} handleChange={handleChange} email={email} message={message} />
        </>);
      case 'Resume':
        return (<Resume heroImg={heroImg} titleIMG={resumeIMG} />);
      default:
        return <p>Unknown Page</p>;
    }
  }

  // The div's on the outside are present to ensure the footer is at the bottom of each viewport.
  return (
    <div style={{ display: 'flex', flexFlow: 'column', minHeight: '100vh' }}>
      <div style={{ flex: "0" }}>
        <Header logo={logo} navClick={navClick} />
      </div>
      {renderPage()}
      <div style={{ flex: "0" }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;