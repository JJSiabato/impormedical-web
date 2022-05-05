import React, { useState } from 'react'
import {FaUserMd, FaWheelchair} from 'react-icons/fa'
import {RiHeartPulseLine} from 'react-icons/ri'
import {MdCleanHands} from 'react-icons/md'


const NavBar = () => {

const [burgerActive,setBurgerActive] = useState(false)
  return (
    <div className='nav-bar'>
        <div className={ burgerActive ? 'burger active' : 'burger'} onClick={()=>setBurgerActive(!burgerActive)}>
            <div className="burger-x"></div>
        </div>
        <div className='links'>
            <ul>
                <li><a href="/"><span><FaWheelchair/></span>MOVILIDAD</a></li>
                <li><a href="/"><span><RiHeartPulseLine/></span> CUIDADO EN EL HOGAR</a></li>
                <li><a href="/"><span><FaUserMd/></span> PROFESIONALES DE LA SALUD</a></li>
                <li><a href="/"><span><MdCleanHands/></span> TAPABOCAS Y DESINFECCIÓN</a></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar