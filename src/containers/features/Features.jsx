import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: '90% Users agree',
    text: 'Social media helps businesses build relationships and reach out to their targeted audience.',
  },
  {
    title: '63% Users think',
    text: 'Employee posts on social media can change the relationships they have with their co-workers.',
  },
  {
    title: '79% Users think',
    text: 'The major reason for employees to use social media during work hours is to take breaks from work.',
  },
  {
    title: '85% Users think',
    text: 'Businesses being ',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Jobs and Businesses</h1>
      <p>With social technologies becoming a given for organizations, more companies have started to integrate various social media platforms to connect and engage with their employees and the public.Social-media has become a powerful marketing tool for brand managers because of its interactive nature.</p>
      <p>With social technologies becoming a given for organizations, more companies have started to integrate various social media platforms to connect and engage with their employees and the public.Social-media has become a powerful marketing tool for brand managers because of its interactive nature.</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
