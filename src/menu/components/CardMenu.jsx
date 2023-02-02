import React, { useEffect } from 'react'
import {Card} from 'react-bootstrap'
import { Link, Navigate, useNavigate } from 'react-router-dom'

export const CardMenu = ({categoria}) => {
  const navigate = useNavigate();
  const validar = (id) =>{
    navigate(`/menulist/${id}`)
  }

  return (
    <>
      <div className='col-sm-12 col-md-6 col-lg-4 animate__animated animate__flipInY' onClick={() => validar(categoria.id)}>
        <Card className='m-2' key={categoria.id} >
            <Card.Img className='cardImg' variant='Top' src={categoria.imagen}/>
            <Card.Body className='cardBody'>
                <Card.Title className='card-color'>{categoria.titulo}</Card.Title>
            </Card.Body>
        </Card>
      </div>
    </>
  )
}
