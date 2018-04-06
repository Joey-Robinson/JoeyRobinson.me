import React from 'react';
import { Icon } from 'semantic-ui-react';

const Contact = () => (
  <div className="Contact">
    <a className="GitHub" href="https://github.com/elamahpla" target="_blank"><Icon size='huge' name='github square' /></a>
    <a className="LinkedIn" href="https://www.linkedin.com/in/joey-robinson/" target="_blank"><Icon size='huge' name='linkedin square' /></a>
    <a className="Twitter" href="https://twitter.com/joeyrobinsondev" target="_blank"><Icon size='huge' name='twitter'/></a>
    <a className="Email" href="mailto: joeyrobinsondev@gmail.com" target="_blank"><Icon size='huge' name='mail' /></a>
  </div>
);

export default Contact; 