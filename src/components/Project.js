import React from 'react';

export default function Project({ title, projectImg, description, usedTech = [], appLink, githubLink }) {
  return (
    <div className='card has-text-white' style={{
      backgroundColor: "purple",
      overflow: 'hidden'
    }}>
      <div className='card-header'>
        <p class="card-header-title has-text-white title is-5">
          {title}
        </p>
      </div>
      <div className='card-image'>
        <img src={projectImg} alt="Project Screenshot" />
      </div>
      <div className='card-content'>
        <div className="content">
          <p>{description}</p>
          <p>Main Tech Used:</p>
          <ul>
            {/* Maps all the tech items. */}
            {usedTech.map(item => <li>{item}</li>)}
          </ul>
        </div>
      </div>
      <footer className="card-footer">
        <a href={appLink} class="card-footer-item has-background-warning">App</a>
        <a href={githubLink} class="card-footer-item has-background-warning">Github</a>
      </footer>
    </div>);
}
