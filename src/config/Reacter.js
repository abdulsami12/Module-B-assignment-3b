import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from '../comp/Dashboard'


const Reacter = () => {
  return (
   
      <BrowserRouter>
      <Routes>

          <Route path='dashboard/*' element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
 
  )
}

export default Reacter
