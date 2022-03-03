import React from 'react';
import Project from './Project';

export default function Homepage({ featureImg }) {
  return (<section className='container columns mx-auto'>
    <div className='box block has-text-white is-two-thirds m-5' style={{
      backgroundColor: "purple"
    }}>
      <h2 className='title has-text-white'>About Me</h2>
      <hr></hr>
      <p>Hello! My name is William Ruback. I am currently learning full stack web development thanks to the UCF Coding Bootcamp program. I am becoming proficient in the use of HTML, CSS, and Javascript for the use of front-end web development, and will soon be learning server backend as well. In addition, I am also proficient in designing motion graphics and visuals effects with after effects, 3D work with blender, and photo editing with Adobe Photoshop. I also have video editing experience using Adobe Premerie Pro, and additional experience working on professional sets as a grip. Below are some examples of my web development work. More will be coming soon!</p>
    </div>
    <Project projectImg={featureImg} />
  </section>);
}
