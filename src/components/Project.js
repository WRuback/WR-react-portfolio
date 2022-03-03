import React from 'react';

export default function Project({ projectImg }) {
  return (<div className='card has-text-white is-one-third m-5' style={{
    backgroundColor: "purple"
  }}>
    <div className='card-header'>
      <p class="card-header-title has-text-white">
        Featured Project : Dewi
      </p>
    </div>
    <div className='card-image'>
      <img src={projectImg} alt="William Ruback" />
    </div>
    <div className='card-content'>
      <p>A Single Page web application that let's you search a wide varity of books with a series of tags. You can then create a user account and save your favorite books your shelf!</p>
    </div>
    <footer className="card-footer">
      <a href="https://dewi-library.herokuapp.com/" class="card-footer-item">App</a>
      <a href="https://github.com/EzequielMejiasMelo/dewi" class="card-footer-item">Github</a>
    </footer>
  </div>);
}
