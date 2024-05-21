import React, { useState } from 'react';
import "./navigation.css"

export default function Menu  () {
  
  const [menu , setMenu] = useState(false);
  
  const [hamburg ,setHumburg] = useState('humburg')  ;
  
  const handleClick = () => {
    if (!menu){
      setMenu(true);
      setHumburg('humburg clicked');
    }
    else {
      setMenu(false);
      setHumburg('humburg unclicked');
    
    }
    console.log(menu,'menu');
      
  };

return(
    
  <div className='menu' onClick={handleClick}>
      <div className={hamburg}></div>
      <div className={hamburg}></div>
      <div className={hamburg}></div>
  </div>


  
);
}