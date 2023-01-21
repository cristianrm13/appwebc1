//import Title from "../components/atomos/title"
import { Link } from "react-router-dom";
import Header from "../Components/atoms/Header";
import Experiencia from "../Components/atoms/Experiencia";
import Estudios from "../Components/atoms/Estudios";
import Habilidades from "../Components/atoms/Habilidades";
/* import ListStudent from "../components/molecules/ListStudent"; */

function Home(){
    /* const listStudent = [
        {
            id:1,
            name:"cristian",
        },{
            id:2,
            name:"gerardo",
        },{
            id:3,
            name:"yahir",
        },{
            id:4,
            name:"cesar",
        },{
            id:5,
            name:"carlos"
            }
    ] */
    return(
        <>
        <Header/>
        <Experiencia/>
        <Estudios/>
        <Habilidades/>
        {/* <Flex/>
        <ListStudent listStudent={listStudent}></ListStudent> */}
        {/* <Link to="/Login">Iniciar Sesion</Link> */}
        </>
    )
}

export default Home;