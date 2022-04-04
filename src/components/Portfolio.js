import fireChair from '../images/FireChair.jpg';
import wolves from '../images/Wolves.jpg';
import techBlog from '../images/TechBlog.png';
import scheduler from '../images/Scheduler.png';
import weather from '../images/WeatherDashboard.png';
import quiz from '../images/QuizGame.png';
import React from 'react';
import Project from './Project';

export default function Portfolio() {
  return (<section className='section'>
    <div className='columns is-multiline is-centered'>
      <div className='column is-half is-one-third-desktop'>
      <Project title="Fire Chair"
          projectImg={fireChair} 
          description="A Jackbox-style web game that let's you host a lobby, invite your friends with the room code, and roast them in a fun party game! Based on the game Hotseat."
          usedTech={["Socket.io", "React.js", "MongoDB"]}
          appLink="https://polw-fire-chair.herokuapp.com/" 
          githubLink="https://github.com/WRuback/fire-chair" />
      </div>
      <div className='column is-half is-one-third-desktop'>
      <Project title="Wolves A La Carte"
          projectImg={wolves} 
          description="A web application that lets you search recipes, and then cacluate the average cost of picking up the ingredients at a the grocery store."
          usedTech={["Spoonacular API", "Korger API", "Bulma"]}
          appLink="https://wruback.github.io/Wolves-a-la-carte/" 
          githubLink="https://github.com/WRuback/Wolves-a-la-carte" />
      </div>
      <div className='column is-half is-one-third-desktop'>
      <Project title="Tech Blog"
          projectImg={techBlog} 
          description="A small tech blog that lets you log in and make posts and comments."
          usedTech={["Handlebars", "Express", "Node.js"]}
          appLink="https://wr-tech-blog.herokuapp.com/" 
          githubLink="https://github.com/WRuback/WR-tech-blog" />
      </div>
      <div className='column is-half is-one-third-desktop'>
      <Project title="Work Day Scheduler"
          projectImg={scheduler} 
          description="A simple scheduler that updates with the time of day and save your entries."
          usedTech={["HTML", "CSS", "Javascript"]}
          appLink="https://wruback.github.io/WR-Workday-Scheduler/" 
          githubLink="https://github.com/WRuback/WR-Workday-Scheduler" />
      </div>
      <div className='column is-half is-one-third-desktop'>
      <Project title="Weather Dashboard"
          projectImg={weather} 
          description="A simple dashboard that lets you see the current weather and a 5 day forecast of any city."
          usedTech={["Open Weather API", "CSS", "Javascript"]}
          appLink="https://dewi-library.herokuapp.com/" 
          githubLink="https://github.com/EzequielMejiasMelo/dewi" />
      </div>
      <div className='column is-half is-one-third-desktop'>
      <Project title="Quiz Game"
          projectImg={quiz} 
          description="A small quiz game that will save user scores locally."
          usedTech={["HTML", "CSS", "Javascript"]}
          appLink="https://wruback.github.io/WR-quiz-game/" 
          githubLink="https://github.com/WRuback/WR-quiz-game" />
      </div>
    </div>
  </section>);
}
