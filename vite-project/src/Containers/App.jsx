import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from "../pages/Home";
/* import Login from "../pages/Login";
import Register from '../pages/Register'; */
/* import FlexBox from '../components/molecules/FlexBox'; */

function App() {
    return ( 
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/Login" element={<Login/>}/>
            <Route path='/Register' element={<Register/>}/> */}
            {/* <Route path='/flexbox' element={<FlexBox/>}/> */}
        </Routes>
        </BrowserRouter>
     );
}

export default App;