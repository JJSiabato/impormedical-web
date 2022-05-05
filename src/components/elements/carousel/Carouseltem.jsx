import React from 'react'

const Carouseltem = (data) => {
  return (
    <div className="carousel-inner">
        {data.data.map((item, index)=>{
            let Word = item.text.split(' ')
            let firstWord = Word[0] 
            Word.shift()           
            Word = Word.join(" ")
            toString(Word)
            let newWord = Word.replace(/,/g," ")
            const color_text = ['warning', 'success', 'danger']
        return(        
             <div key={Math.random()} className={index === 1 ? "carousel-item active" : "carousel-item"}>
                <img  src={item.url} className="d-block w-100" alt="..."/>
                <div className=" w-25 carousel-caption d-none d-md-block text-left">
                <h1><span className={'text-'+color_text[index]}>{firstWord}</span><br/>{newWord}</h1>
                <button className='btn btn-primary'>VER PRODUCTOS</button>
            </div>
        </div>
        
        
        )})}
       </div>
  )
}

export default Carouseltem