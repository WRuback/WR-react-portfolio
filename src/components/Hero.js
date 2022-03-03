import React from 'react';

export default function Hero({ computerImg, logo }) {
  return (<section class="hero is-medium is-link" style={{
    backgroundColor: "indigo",
    position: "relative"
  }}>
    <img src={computerImg} alt="Computer Graphic" style={{
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      maxWidth: "60%",
      maxHeight: "100%"
    }} />
    <div class="hero-body has-text-right" style={{
      zIndex: 1
    }}>

      <img src={logo} alt="William Ruback" />
      <p class="subtitle">
        Full-Stack Web Developer
      </p>
    </div>
  </section>);
}
