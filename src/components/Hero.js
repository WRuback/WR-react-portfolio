import React from 'react';

export default function Hero({ computerImg, logo, heroImg}) {
  return (<section class="hero is-medium is-link" style={{
    backgroundColor: "indigo",
    position: "relative",
    overflow: "hidden"
  }}>
    <img src={heroImg} alt="bowling ball" style={{
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      maxWidth: "100%",
      filter: 'sepia(100%) hue-rotate(230deg) blur(4px) saturate(300%) brightness(50%)'
    }} />
    <img src={computerImg} alt="Computer Graphic" style={{
      // Positions the computer graphic to the center right.
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      maxWidth: "60%",
      maxHeight: "100%"
    }} className='hide-on-mobile' />
    <div class="hero-body has-text-right hero-titles" style={{
      zIndex: 1
    }}>

      <img src={logo} alt="William Ruback" />
      <p class="subtitle is-4">
        Full-Stack Web Developer
      </p>
    </div>
  </section>);
}
