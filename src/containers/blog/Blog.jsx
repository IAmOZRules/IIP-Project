import React from 'react';
import Article from '../../components/article/Article';
import './blog.css';

import team from './team.json';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="team">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">About the Team</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupB">
        {team.map((item, index) => (
            <Article key={item.regno + index} text={item.name} className={item.className} regno={item.regno} />
          ))}
      </div>
    </div>
  </div>
);

export default Blog;
