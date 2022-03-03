import dewi from '../images/Dewi.png';
import React from 'react';
import Project from './Project';

export default function Portfolio() {
  return (<section className='section'>
    <div className='columns is-multiline is-centered'>
      <div className='column is-half is-one-third-desktop'>
        <Project projectImg={dewi} />
      </div>
      <div className='column is-half is-one-third-desktop'>
        <Project projectImg={dewi} />
      </div>
      <div className='column is-half is-one-third-desktop'>
        <Project projectImg={dewi} />
      </div>
      <div className='column is-half is-one-third-desktop'>
        <Project projectImg={dewi} />
      </div>
      <div className='column is-half is-one-third-desktop'>
        <Project projectImg={dewi} />
      </div>
      <div className='column is-half is-one-third-desktop'>
        <Project projectImg={dewi} />
      </div>
    </div>
  </section>);
}
