import React from 'react'
import {Modal} from 'react-bootstrap'

export const ModalImage = (props) => {
    
  return (
    <>
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton className='modal-product'>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.product.nombre}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={props.product.imagen} className='imagen-modal'/>
      </Modal.Body>
      <Modal.Footer className='modal-product'>
        {`$ ${props.product.precio}`}
      </Modal.Footer>
    </Modal>
    </>
  )
}
