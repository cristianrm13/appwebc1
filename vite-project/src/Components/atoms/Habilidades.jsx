import {data} from "../../../src/data/data"

function Habilidades() {
    return ( 
        <>
        <div><center><p>Habilidades</p></center></div>
        <div className="habilidad">
            <div className="habil"><h1>{data.habilidades.habil1}</h1></div>
            <div className="habil"><h1>{data.habilidades.habil2}</h1></div>
            <div className="habil"><h1>{data.habilidades.habil3}</h1></div>
            <div className="habil"><h1>{data.habilidades.habil4}</h1></div>
        </div>
        </>
     );
}

export default Habilidades;