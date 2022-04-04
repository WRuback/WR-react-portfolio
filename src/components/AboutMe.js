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
            <p >Hello! My name is William Ruback. I am a full-stack developer using previous experience in video production and motion graphics to create engaging and dynamic web pages. I am known for adapting quickly to changing environments and finding creative solutions. I am passionate about creating applications to automate simple tasks for ease of use, and creating a more exciting experience for the user. My previous experience working in the film industry gives me additional insight in generating user engagement, and great experience in working closely with a team of professionals. I am excited to use my skills in React.js, node.js, and Socket.io in a fast-paced work environment to make a more engaging user experience.</p>
          </div>
        </div>
        <div className='column is-one-third'>
        <Project title="Fire Chair"
          projectImg={featureImg} 
          description="A Jackbox-style web game that let's you host a lobby, invite your friends with the room code, and roast them in a fun party game! Based on the game Hotseat."
          usedTech={["Socket.io", "React.js", "MongoDB"]}
          appLink="https://polw-fire-chair.herokuapp.com/" 
          githubLink="https://github.com/WRuback/fire-chair" />
        </div>
      </div>
    </section>);
}
