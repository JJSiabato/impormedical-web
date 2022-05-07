import React from 'react'

const Collection = ({data, title, color}) => {
    let newData = data.slice(0,4)
   
  return (
    <div className='container text-center'> 
        <h2 className={'text-center text-'+color}>{title}</h2><br />       
        <div className='card-deck'>
        {newData.map((item, index) =>{
            return(
            <div key={index} className="card">
                <img src={item.url_img} className="card-img-top" alt="card"/>
                <div className="text-center card-body">
                    <p className="card-title">{item.name}</p>
                    <button className="btn btn-primary w-75 ">AÑADIR A CARRITO</button>
                </div>
            </div>
            )
        })}
        </div>
    </div>
  )
}

export default Collection