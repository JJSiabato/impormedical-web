/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";

const SiderBar = (props) => {
    const [active, setActive] = useState('')

    const handleGo = (e)=>{
     console.log(e.target.name)
     document.querySelector(`#${e.target.name}`).scrollIntoView({behavior : "smooth"})
    }

    useEffect(()=>{
        setActive(props.changeClass)
    },[props])
  return (
    <>
        <aside>
            <nav className={`sider-bar ${active}`}>
                <ul>
                    <li><a onClick={handleGo} name="header">Home</a></li>
                    <li><a onClick={handleGo} name="collection">Nueva colección</a></li>
                    <li><a onClick={handleGo} name="we">Conocenos</a></li>
                    <li><a onClick={handleGo} name="articles">Artículos</a></li>
                    <li><a onClick={handleGo} name="footer" >Contacto</a></li>
                </ul>
            </nav>
        </aside>
    </>
  )
}

export default SiderBar