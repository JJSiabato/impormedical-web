import React from 'react'
import {BiSearch} from 'react-icons/bi'
const InputSearch = () => {
  return (
    <div className="search">
        <form className="form-search">
          
            <input type="search" id="form1"  placeholder='¿Que estás buscando? Escribelo aquí...'/>
            <button type="button" >
            <BiSearch/>
            </button>
          
        
        </form>
        
    </div>
  )
}

export default InputSearch