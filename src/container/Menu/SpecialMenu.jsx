import React from 'react';
import { data } from '../../constants';
import './SpecialMenu.css';
import { MenuItem, SubHeading } from '../../components';
import  Menu from '../../assets/menu.png'
const SpecialMenu = () => (
<div className='SpecialMenu section__padding'>
  <div className="SpecialMenu_title ">
       <SubHeading title ='Menu that fits you palatte'/> 
       <h1 className='headtext__cormorant'>Today's Special </h1>
       </div>
<div className="SpecialMenu-menu">
  <div className="SpecialMenu__Wine-content ">
 <p className='SpecialMenu__Wine-content-title'>Wine & Beer </p>
 <div className="SpecialMenu__Wine-content_items">
  {data.wines.map((wine,index)=>(
    < MenuItem key={wine.title + index } 
    title={wine.title} 
    price={wine.price}
    tags={wine.tags}/>
  ))}
 </div>
</div>
<div className="SpecialMenu__Image"> 
    <img src={Menu} alt="Menu" />
    </div>
<div className="SpecialMenu__Cocktails-content">
<p className='SpecialMenu__Cocktails-content-title'>Cocktails</p>
 <div className="SpecialMenu__Cocktails-content_items">
  {data.cocktails.map((cocktail,index)=>(
     < MenuItem key={cocktail.title + index }title={cocktail.title}  price={cocktail.price} tags={cocktail.tags}/>
     ))}
 </div>
    </div>
    
   
</div>
<div style={{marginTop:'15px'}} id='SpecialMenu-button'>
  <button className="custom__button" >
    View More
  </button>
    </div>
</div>
);

export default SpecialMenu;
