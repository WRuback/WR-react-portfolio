import React from 'react';

export default function PageTitle({ heroImg, title, subtitle }) {
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
      filter: 'sepia(100%) hue-rotate(230deg) saturate(300%) brightness(50%)'
    }} />
    <div class="hero-body has-text-centered has-text-white" style={{
      zIndex: 1
    }}>
      <p className="title is-1">
        {title}
      </p>
      <p className="subtitle is-4">
        {subtitle}
      </p>
    </div>
  </section>);
}
