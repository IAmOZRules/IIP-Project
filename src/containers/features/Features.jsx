import React from 'react';
import { isMobile } from 'react-device-detect';

import domainsData from './domainsData.json';
import LargeView from './LargeView';
import MobileView from './MobileView';

import './features.css';

const Features = () => {
  if (isMobile) {
    return <MobileView domainsData={domainsData} />;
  } else {
    return <LargeView domainsData={domainsData} />;
  }
}

export default Features;
