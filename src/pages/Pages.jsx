import React from 'react'
import Home from './Home'
import Searched from './Searched'
import Recipe from './Recipe'
import { Route, Routes, useLocation } from 'react-router-dom'
import Cuisine from './Cuisine'

function Pages() {
  const location = useLocation();
  return (
    <Routes Location={location} key={location.pathname}>
      <Route path='/' element={<Home />} />
      <Route path='/cuisine/:type' element={<Cuisine />} />
      <Route path='/searched/:search' element={<Searched />} />
      <Route path='/recipe/:name' element={<Recipe />} />
    </Routes>
  )
}

export default Pages