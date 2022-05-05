import React from 'react'
import data  from '../../../assets/carousel_data.json'
import Carouseltem from './Carouseltem'

const Carrousel = () => {
  return (
    <div>
        <div>
            <div id="carouselMain" className="carousel slide" data-ride="carousel">                 
                    <Carouseltem data={data}/>                
                <a className="carousel-control-prev" href="#carouselMain" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselMain" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Carrousel