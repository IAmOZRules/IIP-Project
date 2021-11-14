import React from 'react';
import { features } from './features.js';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const material = `
  Social media platforms are used by approximately 3.5 billion people all over the world.
  It has allowed us to reach, nurture and engage in relationships with friends, relatives
  and even strangers! For a technology used by almost half the Earth’s population, we still
  do not have a good understanding of the impact it has on our daily lives. With this project,
  we aim to analyze the impact social media has on both individuals and society as a whole.
`;

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Impact of Social Media on Society" text={material} />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Domains Explored</h1>
    </div>

    {features.map((featureset) => (
      <div className="gpt3__whatgpt3-container">
        {featureset.map((feature, index) => (
          <Feature key={index} title={feature.title} text={feature.description} />
        ))}
      </div>
    ))}
  </div>
);

export default WhatGPT3;
