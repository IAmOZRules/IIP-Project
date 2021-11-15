import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { Navbar } from './components';

import ScrollToTop from 'react-scroll-to-top';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <WhatGPT3 />
    <Features />
    <Possibility />
    <Blog />
    <Footer />
    <ScrollToTop smooth
      style={{
        backgroundColor: 'white',
        padding: '10px',
     }}
    />
  </div>
);

export default App;
