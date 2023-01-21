import Uni from '../../assets/img/uni.jpg'

function Estudios() {
    return ( 
        <div className='cuad'>
            <div className='color'>
                <p>Estudios</p>
                <h1>* Jardin de niños Jaime Sabinez</h1>
                <h1>* Primaria Hermenegildo galeana</h1>
                <h1>* Secundaria Tecnica #34 Miguel Lara Vazallos</h1>
                <h1>* Preparatoria Cecyte 09</h1>
                <h1>* Universidad Politecnica de Chiapas</h1>
            </div>

            <div className='cuad'>
              <img src={Uni} alt="Universidad" id="uni" />
            </div>
            
            <div className='color'>
              <p>Idiomas</p>
              <h1>* Español 100%</h1>
              <h1>* Ingles 80%</h1>
            </div>
        </div>
     );
}

export default Estudios;