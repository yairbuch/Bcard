import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CardsPage from '../cards/pages/CardsPage'
import AboutPage from '../pages/AboutPage'
import ErrorPage from '../pages/ErrorPage'
import ROUTES from './routesModel'


const Router = () => {
  return (
    <Routes>
        <Route path={ROUTES.ROOT} element={<CardsPage/>}/>
        <Route path={ROUTES.CARDS} element={<CardsPage/>}/>
        <Route path={ROUTES.ABOUT} element={<AboutPage/>}/>
        <Route path='*' element={<ErrorPage/>}/>
    </Routes>
  )
}

export default Router