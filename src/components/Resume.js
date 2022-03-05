import React from 'react';

export default function Resume({ heroImg }) {
  return (<>
    <section class="hero is-small is-link" style={{
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
          Resume
        </p>
        <p className="subtitle is-4 has-text-warning is-underlined">
          <a href='https://drive.google.com/file/d/1Cl_1MgX_N5v5Ma80VtvC89GNuSoVQApk/view?usp=sharing' target="_blank" rel="noreferrer noopener">Download Here</a>
        </p>
      </div>
    </section>
    <section className='section'>
      <div className='container columns mx-auto'>
        <div className='column'>
          <div className='box has-text-white' style={{
            backgroundColor: "purple"
          }}>
            <h4 className='title is-4 has-text-white'>Frontend Skills</h4>
            <hr></hr>
            <div className='content'>
              <ul>
                <li>React.js</li>
                <li>Bulma</li>
                <li>Bootstrap</li>
                <li>CSS</li>
                <li>Handlebars</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='box has-text-white' style={{
            backgroundColor: "purple"
          }}><undefined />
            <h4 className='title is-4 has-text-white'>Backend Skills</h4>
            <hr></hr>
            <div className='content'>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>);
}
