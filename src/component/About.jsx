import React from 'react'
import './About.css';
import jsonData from '../data/data.json';
// import styles from './styles.module.css';


const About = () => {

  return (
    <>
    <div className="container box_area">
        <div className="career_section"><h1>ABOUT</h1>
        <p className='carnity_txt'>Career Opportunity</p>
        </div>
        <div className="career_section_img"><img src={process.env.PUBLIC_URL + '/assets/Rectangle.svg'} alt="Icon" /></div>
    </div>

    <div className="tex_box">
      <p className="text_head">Empowering Young Minds<br></br>
The <span>Ultimate Job Solution</span> for Fresher
        </p>
        <p className="text_content">
        We have the infrastructure to address the widespread issue of freshly graduated students needing help getting<br></br> their dream job. Our solution covers the full spectrum, from helping people find work to imparting the skills they<br></br> need to succeed in the workplace and assisting them in navigating the hiring process.
        </p>
      </div>
    <div className="container">
      {jsonData.first.map(item => (
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
      {jsonData.second.map(item => (
        <div key={item.id} className="explore_item">
          <div className="icon_career">
            <img src={item.first_logo} alt="Icon" />
            <img src={item.second_logo} alt="Icon" />
          </div>
          <div className=""><h3>{item.title}</h3> </div>
          <div className=""><p>{item.subtext}</p></div>
          <div className=""><p><img src={item.location} alt="Icon" /><span>Pune</span>
           <span><img src={item.brif} alt="Icon" /> 0-3 years</span>
           <span><img src={item.money} alt="Icon" /> 4k</span>
           <span><img src={item.time} alt="Icon" /> 2hr ago</span>
            </p></div>
          <div className='btn_area'>
          <button type="button">View Details</button>
          <button type="button">Apply Now</button>
          </div>
          
        </div>
      ))}
    </div>

    {/* 4 boxes */}

    <div className="container smalBox_area">
      <div className='box_container'>
      {jsonData.third.map(item => (
          <div key={item.id} className="explore_bottom">
          <div className="icon">
            <img className='st_icon' src={item.icon} alt="Icon" />
            <img className='st_area' src={item.name} alt="Icon" />
          </div>
          <div className="title">
            {/* <img src={item.name} alt="Icon" /> */}
          </div>
          
        </div>
      ))}
      </div>
    </div>


    </>
  );
};

export default About
