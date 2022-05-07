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
    <div id="main">
      <div>
          <Carrousel/>
          <CarouselTape/>
      </div>
      <section id="collection">        
        <Collection data={products.wheelchair} title="NUEVA COLECCIÓN" color="primary" />
      </section>
      <section id="we">
        <ImgGroup />
      </section>
      <section id="articles">
        <Buy />
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
    </div>
  )
}

export default Main