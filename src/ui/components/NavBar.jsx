import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <>
        <nav className='navbar navbar-expand-lg header-background p-2'>
            <Link className='titulo navbar-brand header-color' to='/'>Arte de Café</Link>
            <div className='collapse navbar-collapse'>
              <div className='navbar-nav'>
                <NavLink
                  className='nav-item nav-link header-color'
                  to="/"
                  >
                    Categorias
                  </NavLink>
              </div>
            </div>
        </nav>
    </>
  )
}
