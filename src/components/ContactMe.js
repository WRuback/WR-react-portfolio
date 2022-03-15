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
    <div className='box' style={{ backgroundColor: 'rgb(255, 247, 207)' }}>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input className="input"
              type="text"
              placeholder="Text input"
              name='name'
              value={contactName}
              onChange={handleChange}
              onBlur={checkInputStatus} />
          </div>
        </div>
        <div className="field">
          <label className="label">Email</label>
          <div className="control">
            <input className="input"
              type="text"
              placeholder="Text input"
              name='email'
              value={email}
              onChange={handleChange}
              onBlur={checkInputStatus} />
          </div>
        </div>
        <div className="field">
          <label className="label">Message</label>
          <div className="control">
            <textarea className="textarea"
              type="textarea"
              placeholder="Your Message"
              name='message' value={message}
              onChange={handleChange}
              onBlur={checkInputStatus} />
          </div>
        </div>
        <div className="field">
          <label className="label">{errorDisplay}</label>
          <div className="control">
            <button
              className="button has-text-white"
              style={{ backgroundColor: 'purple' }}
              // Stays disabled unless everything is filled out with proper format.
              disabled={contactName &&
                email &&
                email.match(/^([a-z0-9_.-]+)@([\da-z.-]+)\.([a-z.]{2,6})$/) &&
                message ? "" : "true"}>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
    <div className='box' style={{ backgroundColor: 'rgb(255, 247, 207)' }}>
      <h3 className='title is-4 has-text-centered'>Or email me at <a href="mailto: wrubackdev@gmail.com">wrubackdev@gmail.com</a>.</h3>
    </div>
  </section>);
}
