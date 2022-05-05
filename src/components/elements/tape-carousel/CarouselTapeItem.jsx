import React from 'react'

const CarouselTapeItem = (data) => {
  return (   
    <div className="items">
        
        <div  className="rows">
        <div className='left'></div> 
        {data.data.map((item, index)=>{
            console.log(item)
            return(                 
                <div  key={Math.random()} className="card" >
                    <img className="card-img-top" src={item.url} alt="Card"/>
                    <div className="card-body">
                        <p className="card-text text-center">{item.text}</p>
                    </div>
                </div>              
            )
        })}
            </div>
        </div>
    
  )
}

export default CarouselTapeItem