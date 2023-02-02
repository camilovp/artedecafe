import React from 'react'
import { Link } from 'react-router-dom'
import {Carousel, CarouselItem} from 'react-bootstrap'

export const CarouselMenu = () => {
  return (
    <>
        <Carousel>
            <CarouselItem>
                <img 
                    className='d-block w-100'
                    src='..\src\assets\Frappe.jpg' 
                    alt='First Slide'
                />
                <Carousel.Caption>
                    <h3>!Bienvenidos¡</h3>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem>
                <img 
                    className='d-block w-100' 
                    src='..\src\assets\capuccino.jpg' 
                    alt='Second Slide'
                />
                <Carousel.Caption>
                    <h3>Te atendemos</h3>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem>
                <img 
                    className='d-block w-100' 
                    src='..\src\assets\capuccino.jpg' 
                    alt='Second Slide'
                />
                <Carousel.Caption>
                    <h3>Con mucho amor</h3>
                </Carousel.Caption>
            </CarouselItem>
        </Carousel>
    </>
  )
}
