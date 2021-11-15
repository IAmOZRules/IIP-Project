import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">What's Next? <br /> The Metaverse</h1>
      <p>Facebook's brand name change to Meta signifies the shift from traditional Social Media towards the Metaverse, which is hypothesized iteration of the internet, supporting persistent online 3-D virtual environments, through conventional personal computing, as well as virtual and augmented reality headsets.</p>
      <p>However information privacy & user addictions, are major concerns for the development of the metaverse. Experts are also concerned that the metaverse could be used as an 'escape' from reality in a similar fashion to existing internet technologies.</p>
    </div>
  </div>
);

export default Possibility;
