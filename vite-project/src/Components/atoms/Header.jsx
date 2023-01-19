import Logo from '../../assets/img/Yo.jfif'
import '../../assets/styles/Header.css'

function Header() {
    return ( 
        <>
        <div id="head">
            <div id='flex-img'>
                <img src={Logo} alt="Cristian" id="yo"/>
            </div>

             <div id="nombre">
                <h1>Cristian Gerardo Vazquez Ramos</h1>
                <h2>Software Engineer</h2>
            </div> 
            <div id="nomb">
                <h1></h1>
                
            </div> 
        </div>
        <div id='exper'>
            <div id='contacto'>
                <p>Contacto</p>
                <h1>Telefono: +52 9651248795</h1>
                <h1>E-mail: 221267@ids.upchiapas.edu.mx</h1>
                <h1>Facebook: CristianGVramos</h1>
                <h1>LinkedIn: CristianVRamos</h1>
            </div>
            <div id='about'>
                <p>Acerca de mi</p>
                <h1>Ingeniero de software con 2 años de experiencia en gestion de proyectos.
                    Conocimiento de arquitectura, diseño e infraestructura de sistemas.
                </h1>
                <h1>Gracias a mi implementacion de procesos de trabajo, he reducido el tiempo de entrega de proyecto a un 10%.</h1>
            </div>
        </div>
        <div className='cuad'>
            <div>
                <p>Estudios</p>
                <h1></h1>
            </div>

            <div></div>
            <div></div>
        </div>
       </>
     );
}

export default Header;