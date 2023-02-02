import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MenuRoutes } from '../menu/routes/MenuRoutes'

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path='/*' element={<MenuRoutes/>}/>
        </Routes>
    </>
  )
}
