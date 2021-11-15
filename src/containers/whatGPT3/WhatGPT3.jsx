import React from 'react';
import { features } from './features.js';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="domains">
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Domains Explored</h1>
    </div>

    {features.map((featureset, idx) => (
      <div key={idx} className="gpt3__whatgpt3-container">
        {featureset.map((feature, index) => (
          <Feature htmlId={feature.htmlId} key={index} title={feature.title} text={feature.description} />
        ))}
      </div>
    ))}
  </div>
);

export default WhatGPT3;
