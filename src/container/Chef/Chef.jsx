import React from 'react';
import chef from '../../assets/chef.png';
import Sign from '../../assets/quote.png'
import './Chef.css';
import { SubHeading } from '../../components';
import sign from '../../assets/sign.png'
const Chef = () => (
  <div className='Chef section__padding'>
    <div className="Chef-image">
      <img src={chef} alt="" />
    </div>

    <div className="Chef-content">
      <SubHeading  title={"Chef's Word"}/>
      <h1 className='Chef__content-title headtext__cormorant'>
      What we believe in
      </h1>
      <div className="Chef__content-paragrap">
       
    
      <p>
      <img src={Sign} alt="" />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
      auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
      </p>
      </div>

    <h3 className=' p__cormorant' id='Chefs__name'>
      Kevin Luo</h3>
      <p>Chef & Founder</p>

      <div className="sign-image">
        <img src={sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
