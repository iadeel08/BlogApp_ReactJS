import React from 'react';
import './whatgpt.css';
import { Feature } from '../../components';

const WhatGPT = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt'>
      <div className="gpt3__whatgpt-feature">
        <Feature title="Lorem Ipsum " text="Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry "/>
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gpt3__whatgpt3-container'>
        <Feature title="Lorem Ipsum " text="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
        <Feature title="Lorem Ipsum " text="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
        <Feature title="Lorem Ipsum " text="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
        </div>  
      
      </div>
  )
}

export default WhatGPT