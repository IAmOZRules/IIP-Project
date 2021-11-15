import React from 'react';
import ai from '../../assets/ai.png';
import './header.css';

const message = `
Social media platforms are used by approximately 3.5 billion people all over the world.
It has allowed us to reach, nurture and engage in relationships with friends, relatives
and even strangers! For a technology used by almost half the Earth’s population, we still
do not have a good understanding of the impact it has on our daily lives. With this project,
we aim to analyze the impact social media has on both individuals and society as a whole.
`;

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Impact of Social Media on Society</h1>
      <p>{message}</p>
    </div>

    <div className="gpt3__header-image">
      <img alt="ai" src={ai} />
    </div>
  </div>
);

export default Header;
