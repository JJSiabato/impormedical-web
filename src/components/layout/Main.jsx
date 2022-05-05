import React from 'react'
import Carrousel from '../elements/carousel/Carrousel'
import CarouselTape from '../elements/tape-carousel/CarouselTape'
import Collection from '../sections/Collection'
import products from '../../assets/products.json'
import ImgGroup from '../sections/ImgGroup'
import Buy from '../sections/Buy'
import DualImg from '../sections/DualImg'

const Main = () => {
  
  return (
    <>
      <div>
          <Carrousel/>
          <CarouselTape/>
      </div>
      <div>        
        <Collection data={products.wheelchair} title="NUEVA COLECCIÓN" color="primary"/>
      </div>
      <div>
        <ImgGroup/>
      </div>
      <section>
        <Buy/>
      </section>
      <section>
        <DualImg/>
      </section>
      <section className='mt-5'>
        <Collection data={products.home_terapy} title="AYUDAS PARA LA MARCHA" color="primary"/>
      </section>
      <section className='mt-5'>
        <Collection data={products.movility} title="MOVILIDAD" color="primary"/>
      </section>
    </>
  )
}

export default Main