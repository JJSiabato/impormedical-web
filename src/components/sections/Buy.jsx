import products from '../../assets/products.json'
import { useState } from 'react'
import Collection from './Collection'

const Buy = () => {
    const [data, setData] = useState(products.wheelchair)
    let titles = ["SILLAS DE RUEDAS","TERAPIA EN EL HOGAR","MOVILIDAD"]
    const [title, setTitle]= useState(titles[0])

    const handleChange=(props)=>{
        switch(props){
            case products.home_terapy:
                setTitle(titles[1])
                break;
            case products.movility:
                setTitle(titles[2])
                break;
            default:
                setTitle(titles[0])
            break;               
        }
        setData(props) 
    }
  return (
    <div className="overlay container buy mt-5">
        <div className="text-center bg-white">
            <button onClick={()=>handleChange(products.wheelchair)} className="mr-3 btn btn-primary active">
                {titles[0]}
            </button>
            <button onClick={()=>handleChange(products.home_terapy)} className="mr-3 btn btn-primary">
                {titles[1]}
            </button>
            <button onClick={()=>handleChange(products.movility)} className="mr-3 btn btn-primary">
                {titles[2]}
            </button>
        </div>
        <div className="img-ref"><img src={data[4].url_img} alt={data[4].name}/></div>
        <div className="overlay-content">
            <div className="buy-card"><Collection  data={data} title ={title} color={"white"}/></div>
            
        </div>

    </div>
  )
}

export default Buy