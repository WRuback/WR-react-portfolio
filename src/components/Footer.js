import React from 'react';

function Footer() {
  return (<footer class="footer" style={{
    backgroundColor: "indigo"
  }}>
    <div class="content has-text-centered has-text-white">
      <p>
        &copy; 2022 William Ruback. All Rights Reserved.
      </p>
      <a className='button is-warning mr-3' href="https://github.com/WRuback" target="_blank" rel="noreferrer noopener">Github</a>
      <a className='button is-warning mr-3' href="https://www.linkedin.com/in/william-ruback-9847911b0/" target="_blank" rel="noreferrer noopener">Linkedin</a>
      <a className='button is-warning' href="https://stackoverflow.com/users/17491745/william-ruback" target="_blank" rel="noreferrer noopener">Stackoverflow</a>
      
    </div>
  </footer>);
}

export default Footer;
