import React from 'react'
import {MdOutlineShoppingCart} from 'react-icons/md'

const HeadSide = () => {
  return (
    <div className='head-side'>
      <div className='orders'><a href="/">MIS PEDIDOS</a></div>
      <div className='login'>
        <label htmlFor="in">HOLA ALIAD@</label>
        <a href="/">INGRESA</a>
      </div>
      <div className='shopping-cart'>
      <span>1</span>
      <MdOutlineShoppingCart id='cart'/>
      
      </div>
        
        
    </div>
  )
}

export default HeadSide