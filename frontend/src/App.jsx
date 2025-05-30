import React from 'react'
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Offers from './components/Offers/Offers';
import Computer from './components/Computer/Computer';
import Contactus from './pages/Contactus';
import HeadPhones from './components/HeadPhones/HeadPhones';
import Login from './pages/Login';
import Registration from './pages/Registration';
const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/footer' element={<Footer/>}/>
        <Route path='/computers' element={<Computer/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/headphones' element={<HeadPhones/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/registration' element={<Registration/>}/>


      </Routes>
    </Router>
    </>
  )
}

export default App