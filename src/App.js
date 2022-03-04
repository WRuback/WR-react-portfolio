import logo from './images/Logo.png';
import computerImg from './images/Computeredit.png';
import dewi from './images/Dewi.png';
import React, { useState } from 'react';
import Footer from './components/Footer';
import Homepage from './components/AboutMe';
import Hero from './components/Hero';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import ContactMe from './components/ContactMe';

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
          <Homepage featureImg={dewi} />
        </>);
      case 'Projects':
        return (<>
          <Hero computerImg={computerImg} logo={logo} />
          <Portfolio />
        </>);
      case 'Contact':
        return (<ContactMe contactName={contactName} handleChange={handleChange} email={email} message={message} />);
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









