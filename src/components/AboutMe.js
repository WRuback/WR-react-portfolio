import React from 'react';
import Project from './Project';
import billy from '../images/ProfileIMG.jpg';

export default function AboutMe({ featureImg }) {
  return (
    <section className='section'>
      <div className='container columns is-align-items-center mx-auto'>
        <div className='column is-two-thirds'>
          <div className='box has-text-white' style={{
            backgroundColor: "purple"
          }}>
            <h2 className='title has-text-white'>About Me</h2>
            <hr></hr>
            <img src={billy} alt='William Ruback' style={{
            border: "5px solid yellow",
            borderRadius: "20px 60px 20px 60px",
            maxWidth: '50%',
            maxHeight: '13rem',
            float: 'left',
            marginRight: "1.5em",
            marginBottom: "0.2em"
          }}/>
            <p >Hello! My name is William Ruback. I am currently learning full stack web development thanks to the UCF Coding Bootcamp program. I am becoming proficient in the use of HTML, CSS, and Javascript for the use of front-end web development, and will soon be learning server backend as well. In addition, I am also proficient in designing motion graphics and visuals effects with after effects, 3D work with blender, and photo editing with Adobe Photoshop. I also have video editing experience using Adobe Premerie Pro, and additional experience working on professional sets as a grip. Below are some examples of my web development work. More will be coming soon!</p>
          </div>
        </div>
        <div className='column is-one-third'>
          <Project title="Featured Project : Dewi"
          projectImg={featureImg} 
          description="A Single Page web application that let's you search a wide varity of books with a series of tags. You can then create a user account and save your favorite books your shelf!"
          usedTech={["MySQL", "Express", "Handlebars"]}
          appLink="https://dewi-library.herokuapp.com/" 
          githubLink="https://github.com/EzequielMejiasMelo/dewi" />
        </div>
      </div>
    </section>);
}
