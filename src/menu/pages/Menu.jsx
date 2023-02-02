import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { CardMenu } from '../components/CardMenu'
import { CarouselMenu } from '../components/CarouselMenu'
import { categorias } from '../data/categorias'

export const Menu = () => {
    const categories = categorias
    
  return (
    <>
        <div className='body-background'>
            <CarouselMenu/>
            <div className='container mt-3'>
                <div className='row'>
                    {(categories.length > 0) &&
                        categories.map( (cat) => 
                            <CardMenu key={cat.id} categoria={cat} />
                    )}
                </div>
            </div>
        </div>
    </>
  )
}
