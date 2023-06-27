import React, { useState } from 'react';

export default function ContactMe({ contactName, handleChange, email, message }) {
  // The state that stores what the error message will display.
  let [errorDisplay, setErrorDisplay] = useState("");

  // Checks the input when not focused, and display any according errors, or clears them.
  function checkInputStatus(e) {
    switch (e.target.name) {
      case "name":
        if (!contactName) {
          setErrorDisplay('Name Required');
        } else {
          setErrorDisplay('');
        }
        break;
      case "email":
        if (!email) {
          setErrorDisplay('Email Required');
        } else if (!(email.match(/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/))) {
          setErrorDisplay('Invalid Email');
        } else {
          setErrorDisplay('');
        }
        break;
      case "message":
        if (!message) {
          setErrorDisplay('Message Required');
        } else {
          setErrorDisplay('');
        }
        break;
      default:
        break;
    }
  }

  // Handles the submit event, checking if everything is properly inputed.
  function handleSubmit(e) {
    e.preventDefault();
    if (contactName &&
      email &&
      email.match(/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/) &&
      message) {
      alert("Form is proper, but we cannot handle this request. Please send this request to wrubackdev@gmail.com. Thank you");
    }
  }

  return (<section className='section'>
    <div className='box' style={{ backgroundColor: "purple" }}>
      <h3 className='title is-4 has-text-white has-text-centered'>Email me at <a style={{ color: "Fuchsia" }} href="mailto: wrubackdev@gmail.com">wrubackdev@gmail.com</a>, or call  at <a style={{ color: "Fuchsia" }} href="tel:5618771580">{"(561)-877-1580"}</a>.</h3>
    </div>
  </section>);
}
