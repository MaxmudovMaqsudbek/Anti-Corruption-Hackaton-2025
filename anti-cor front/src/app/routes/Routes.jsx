import React from 'react'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import CheckingDatas from '../../pages/CheckingDatas'
import CreatingRequest from '../../pages/CreatingRequest'
import HeroAnimation from '../../pages/Home'

const AppRoutes = () => {
  return (
    <div>
        
        <BrowserRouter>
        
          <Routes>
              <Route index element={<HeroAnimation/>} />
              <Route path="/creatingrequest" element={<CreatingRequest />} />
              <Route path="/checkingdata" element={<CheckingDatas />} /> 
          </Routes>

        </BrowserRouter>
    </div>
  )
}

export default AppRoutes