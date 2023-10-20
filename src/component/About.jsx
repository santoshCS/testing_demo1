import React from 'react'
import './About.css';
import jsonData from '../data/data.json';

const About = () => {
  return (
    <>
    <div className="container box_area">
        <div className="career_section"><h1>About</h1></div>
        <div className="career_section"><h1>About</h1></div>
    </div>

    <div className="container">
      {jsonData.map(item => (
        <div key={item.id} className="item">
          <div className="icon">
            <img src={item.icon} alt="Icon" />
          <div className="title">{item.title}</div>
          </div>
          <div className="text">{item.text}</div>
        </div>
      ))}
    </div>
        {/* second area */}

    <div className="container box_area">
      {jsonData.map(item => (
        <div key={item.id} className="explore_item">
          <div className="icon">
            <img src={item.icon} alt="Icon" />
          </div>
          <div className="title">{item.title}</div>
          <div className="text">{item.text}</div>
        </div>
      ))}
    </div>

    {/* 4 boxes */}

    <div className="container smalBox_area">
      {jsonData.map(item => (
        <div key={item.id} className="explore_bottom">
          <div className="icon">
            <img src={item.icon} alt="Icon" />
          </div>
          <div className="title">{item.title}</div>
          <div className="text">{item.text}</div>
        </div>
      ))}
    </div>


    </>
  );
};

export default About
