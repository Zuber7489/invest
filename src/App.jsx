import  React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./Contact";
import About from "./About";
import Home from "./Home";
import Services from "./Services";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import Footer from "./Footer";


const App = () =>{


    return(
<>

<Navbar/>
<Routes>
<Route path='/' element={<About/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='/services' element={<Services/>} />
<Route path='/home' element={<Home/>} />
</Routes>
<Footer/>

</>
    )
    }

export default App;