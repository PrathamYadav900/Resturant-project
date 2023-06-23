import React from 'react';

import './MenuItem.css';

const MenuItem = ({title,price,tags}) => (
 <div className="menuitem">
  <div className="menuitem-head">
    <div className="menuitem-name">
      <p className="p__cormorant" style={{color : '#DCCA87'}}>
        {title}
      </p>
    </div>
        <div className="app__menuitem-dash">

        </div>
    <div className="menuitem-price">
      <p className="p__cormorant" style={{color : '#ffff'}}>
        {price}
      </p>
    </div>

 
  </div>
  <div className="menuitem-tags">
      <p className="p__cormorant" style={{color : '#AAA'}}>
        {tags}
      </p>
    </div>
 </div>
);

export default MenuItem;
