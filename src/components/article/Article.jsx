import React from 'react';
import './article.css';

const Article = ({ regno, text }) => {
  const classname = `gpt3__blog-container_article gpt3__${regno}`;

  return (
    <div className={classname}>
      <div className="gpt3__blog-container_article-content">
        <div>
          <h3>{text}</h3>
        </div>
        <p>{regno}</p>
      </div>
    </div>
  )
};

export default Article;
