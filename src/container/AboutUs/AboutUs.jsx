import React from 'react';
import knife from '../../assets/knife.png';
import {images} from '../../constants'
 
import './AboutUs.css';

const AboutUs = () => (
  <div className='About_Us app__bg section__padding'> 
  <div className='AboutUs-overlay'>
  <img src={images.G}  alt='G-letters' />
  </div>

  <div className="About_Us-content">
      <h2> About Us </h2>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
    </p>
      <button>
        Know More
      </button>
  </div>
 <div className="About_Us-image section__padding">
     <img src={knife} alt="Knife" />
 </div>
 <div className="Our_History-content">
 <h2> Our History</h2>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
      </p>
      <button>
        Know More
      </button>
 </div>

  </div>
);

export default AboutUs;
