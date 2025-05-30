import React from 'react'
import { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer/Footer';
import Offers from './components/Offers/Offers';
const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/offers' element={<Offers/>}/>
        <Route path='/footer' element={<Footer/>}/>

      </Routes>
    </Router>
    </>
  )
}

export default App