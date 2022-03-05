import React from 'react';

export default function PageTitle({ heroImg, titleIMG, subtitle }) {
  return (<section class="hero is-small is-link" style={{
    backgroundImage: "indigo",
    position: "relative",
    overflow: 'hidden'
  }}>
    <img src={heroImg} alt="bowling ball" style={{
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      maxWidth: "100%",
      // Adds styling filters to the background image.
      filter: 'sepia(100%) hue-rotate(230deg) blur(4px) saturate(300%) brightness(50%)'
    }} />
    <div class="hero-body has-text-centered has-text-white" style={{
      zIndex: 1
    }}>
      <img src={titleIMG} alt="William Ruback" />
      <p className="subtitle is-4">
        {subtitle}
      </p>
    </div>
  </section>);
}
