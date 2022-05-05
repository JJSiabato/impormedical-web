import React from 'react'

const DualImg = () => {
  return (
    <div className='container mt-5'>
        <div className='row dual-img'>
        <div className="card w-45 text-white">
            <img src="https://impormedical.com.co/images/virtuemart/product/GMDPX-500E-1.jpg" className="card-img" alt="..."/>
            <div className="card-img-overlay bg-transparent">
                <h3 className="card-title">¿Porqué elegirnos?</h3>
                <button className='btn btn-warning w-50'>VER PRODUCTOS</button>
            </div>
        </div> 
        <div className="card w-45 text-white">
            <img src="https://impormedical.com.co/images/virtuemart/product/GMDPX-500E-1.jpg" className="card-img" alt="..."/>
            <div className="card-img-overlay bg-transparent">
                <h3 className="card-title">¿Porqué elegirnos?</h3>
                <button className='btn btn-warning w-50'>VER PRODUCTOS</button>
            </div>
        </div>
        </div> 
    </div>
  )
}

export default DualImg

