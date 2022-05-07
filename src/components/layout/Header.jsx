import React from 'react'
import HeadSide from '../elements/HeadSide'
import InputSearch from '../elements/InputSearch'
import NavBar from '../elements/NavBar'

const Header = () => {
  return (
    
    <div id="header" className="header">
    <div className='contain'>      
        <div className='brand'><img src='https://impormedical.com.co/images/assests/IM/Logo_Impormedical_Horizontal.png' alt='Impormedical'/></div>
        <InputSearch/>
        <HeadSide/>
    </div>
        <NavBar/>        
    </div>
  )
}

export default Header