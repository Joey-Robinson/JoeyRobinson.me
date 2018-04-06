import React from 'react';
import AboutModal from '../../Containers/Modal/AboutModal';
import WhyModal from '../../Containers/Modal/WhyModal';
import WhoModal from '../../Containers/Modal/WhoModal';
import SkillsModal from '../../Containers/Modal/SkillsModal';

const About = () => (
  <div className="About">
    <div className="AboutOne">
      <h1>Who am I?</h1>
    <WhoModal />
    </div>
    <div className="AboutOne">
      <h1>What is this?</h1>
      <AboutModal />
    </div>
    <div className="AboutOne">
      <h1>Why though?</h1>
    <WhyModal />
    </div>
    <div className="AboutOne">
      <h1>Skills?</h1>
    <SkillsModal />
    </div>
  </div>
);

export default About;