import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavBar } from '../../ui/components/NavBar'
import { Footer } from '../components/Footer'
import { Menu } from '../pages/Menu'
import { MenuList } from '../pages/MenuList'

export const MenuRoutes = () => {
  return (
    <>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Menu/>}/>
          <Route path='menulist/:categoryId' element={<MenuList/>}/>
        </Routes>
        <Footer/>
    </>
  )
}
