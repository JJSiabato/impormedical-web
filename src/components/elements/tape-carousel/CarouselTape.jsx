import React from 'react'
import CarouselTapeItem from './CarouselTapeItem'
import data from '../../../assets/carousel_cards.json'

const CarouselTape = () => {
  return (
    <div>
                     
        <CarouselTapeItem data = {data}/>
        <div className='right'></div>        
    </div>
  )
}

export default CarouselTape