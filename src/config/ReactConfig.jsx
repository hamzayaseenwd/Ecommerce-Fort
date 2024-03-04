import React from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Home from '../screens/Home'
import Contact from '../screens/Contact'
import About from '../screens/About'
import Navbar from '../components/Navbar'
import Product from '../screens/Product'




const ReactConfig = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/product' element={<Product />} />


        </Routes>
      </BrowserRouter>


    </>





  )
}

export default ReactConfig