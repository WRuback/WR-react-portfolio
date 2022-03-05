import logo from './images/Logo.png';
import computerImg from './images/Computeredit.png';

import dewi from './images/Dewi.png';
import heroImg from './images/Hero.png';

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

  let [contactName, setContactName] = useState('');
  let [email, setEmail] = useState('');
  let [message, setMessage] = useState('');

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

  function navClick(newPage) {
    setPage(newPage);
  };

  function renderPage() {
    switch (page) {
      case 'About Me':
        return (<>
          <Hero computerImg={computerImg} logo={logo} />
          <AboutMe featureImg={dewi} />
        </>);
      case 'Portfolio':
        return (<>
          <PageTitle heroImg={heroImg} title={'Portfolio'} subtitle={'Projects Showcasing My Technical Abilities'}/>
          <Portfolio />
        </>);
      case 'Contact':
        return (<>
          <PageTitle heroImg={heroImg} title={'Contact Me'} subtitle={'Currently avaiable for Any Project'}/>
          <ContactMe contactName={contactName} handleChange={handleChange} email={email} message={message} />
        </>);
      case 'Resume':
        return (<Resume heroImg={heroImg} />);
      default:
        return <p>Unknown Page</p>;
    }
  }

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



