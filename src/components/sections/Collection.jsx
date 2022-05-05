import React from 'react'

const Collection = ({data, title, color}) => {
    let newData = data.slice(0,4)
   
  return (
    <div className='container'> 
        <h2 className={'text-center text-'+color}>{title}</h2><br />       
        <div className='row d-grid gap-3'>
        {newData.map((item, index) =>{
            return(
            <div key={index}className="card x-4">
                <img src={item.url_img} className="card-img-top" alt="card"/>
                <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.tex}</p>
                    <a href="/" className="btn btn-primary w-100">AÑADIR A CARRITO</a>
                </div>
            </div>
            )
        })}
        </div>
    </div>
  )
}

export default Collection