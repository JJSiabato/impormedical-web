import React from 'react'

const ImgGroup = () => {
  return (
    <div className='wraper mt-4 grilla'>
        <div className="card bg-dark text-white card1">
            <img src="https://impormedical.com.co/images/virtuemart/product/GMDPX-500E-1.jpg" className="card-img" alt="..."/>
            <div className="card-img-overlay">
                <h3 className="card-title">¿Porqué elegirnos?</h3>
                <button className='btn btn-warning w-50'>Conoce más de nosotros</button>
            </div>
        </div>   
        <div className="card bg-dark text-white card2">
            <img src="https://impormedical.com.co/images/virtuemart/product/GMD-RJ-T13.jpg" className="card-img" alt="..."/>
            <div className="card-img-overlay">
                <h3 className="card-title">Tienda Surtida</h3>
            </div>
        </div>
        <div className="card bg-dark text-white card3">
        <img src="https://epicrisis.org/wp-content/uploads/2019/12/El-precio-de-la-autonomia-profesional-epicrisis-colegio-medico-colombiano-noticias-salud-publica-actualidad-3.jpg" className="card-img" alt="..."/>
        <div className="card-img-overlay">
            <h3 className="card-title text-center">Gente informada</h3>
        </div>
        </div>
        <div className="card bg-dark text-white card4">
        <img src="https://impormedical.com.co/images/virtuemart/product/ads-100-re.jpg" className="card-img" alt="..."/>
        <div className="card-img-overlay">
            <h3 className="card-title">Usuario interesado</h3>
        </div>
        </div>
        <div className="card bg-dark text-white card5">
        <img src="https://alquilerortopediaonline.com/wp-content/uploads/2017/03/servicio-de-reparacion-de-sillas-de-ruedas-en-Madrid-300x300.jpg" className="card-img" alt="..."/>
        <div className="card-img-overlay">
            <h3 className="card-title">Servicio integral</h3>
        </div>
        </div>
    </div>
    
  )
}

export default ImgGroup