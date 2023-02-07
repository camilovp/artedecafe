import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {Carousel, CarouselItem} from 'react-bootstrap'
import { listImages } from '../data/listImages'

    const urlImages = listImages

    const url1 = urlImages.find(url => url.name == "slider1")
    const url2 = urlImages.find(url => url.name == "slider2")
    const url3 = urlImages.find(url => url.name == "slider3")

export const CarouselMenu = () => {
  return (
    <>
        <Carousel>
            <CarouselItem>
                <img 
                    className='d-block w-100 w-md-75 w-lg-50 mx-md-auto'
                    src={url1.url} 
                    alt='First Slide'
                />
                <Carousel.Caption>
                    <h3>!Bienvenidos¡</h3>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem>
                <img 
                    className='d-block w-100 w-md-75 w-lg-50 mx-md-auto' 
                    src={url2.url}
                    alt='Second Slide'
                />
                <Carousel.Caption>
                    <h3>Te atendemos</h3>
                </Carousel.Caption>
            </CarouselItem>
            <CarouselItem>
                <img 
                    className='d-block w-100 w-md-75 w-lg-50 mx-md-auto' 
                    src={url3.url}
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
