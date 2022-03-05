import React from 'react';

export default function Hero({ computerImg, logo, }) {
  return (<section class="hero is-medium is-link" style={{
    backgroundColor: "indigo",
    position: "relative",
    overflow: "hidden"
  }}>

    <img src={computerImg} alt="Computer Graphic" style={{
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
      <p class="subtitle ">
        Full-Stack Web Developer
      </p>
    </div>
  </section>);
}
