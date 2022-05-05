import metodosPay from '../../assets/metodos_de_pago.png'


const Footer = () => {
  return (
    <div className='container'>
        <div className="footer">
            <div className='group-list'>
                <h5 className='text-warning'>SOBRE NOSOTROS</h5>
                <ul>
                    <li><a className="text-white" href="/">¿Quienes somos?</a></li>
                    <li><a className="text-white" href="/">Nuestra historia</a></li>
                    <li><a className="text-white" href="/">Nuestra información</a></li>
                </ul>
            </div>
            <div className='group-list'>
                <h5 className='text-warning'>CATEGORÍAS DESTACADAS</h5>
                <ul>
                    <li><a className="text-white" href="/">Profesionales de la salud</a></li>
                    <li><a className="text-white" href="/">Protección e higiene</a></li>
                    <li><a className="text-white" href="/">Control y prevención</a></li>
                    <li><a className="text-white" href="/">Movilidad</a></li>
                    <li><a className="text-white" href="/">Independencia y cuidado ene le hogar</a></li>
                    <li><a className="text-white" href="/">Terapía respiratoría</a></li>
                    <li><a className="text-white" href="/">Confort</a></li>
                </ul>
            </div>
            <div className='group-list'>
                <h5 className='text-warning'>SERVICIO AL CLIENTE</h5>
                <ul>
                    <li><a className="text-white" href="/">Politica de entregas</a></li>
                    <li><a className="text-white" href="/">Politica de devoluciones</a></li>
                    <li><a className="text-white" href="/">Politica de garantías</a></li>
                    <li><a className="text-white" href="/">Politica de cancelación</a></li>
                    <li><a className="text-white" href="/">Whatsapp 123 123 3434</a></li>
                    <li><a className="text-white" href="/">PBX 01 8000 123 345</a></li>
                    <li><a className="text-white" href="/">e.Mail: info@gmail.com</a></li>
                </ul>
            </div>
            <div className='group-list'>
                <h5 className='text-warning'>SUSCRIBASE A NUESTRO NEWSLETTER</h5>
               <form  className='text-white text-left' action="/">
                   <input type="text" className='w-100'/><br />
                   <input type="checkbox"  Name="terminos" id=""  />
                   <span>Aceptación de términos y condiciones de manejo de datos</span>
               </form>
               <div className='text-left mt-3'>
                   <span className='text-white'>Nuestros metodos de pago:</span>
                   <div className='pay-method'>
                       <img src={metodosPay} alt="" />
                       
                   </div>
               </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer