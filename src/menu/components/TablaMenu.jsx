import React, { useState } from 'react'
import {Table} from 'react-bootstrap'
import { getProductsByCategoria } from '../helpers/getProductsByCategoria'
import { ModalImage } from './ModalImage'

export const TablaMenu = ({categoryId}) => {
    const products = getProductsByCategoria(categoryId)
    const [showModal, setShowModal] = useState(false)
    const [productSelect, setProductSelect] = useState({})

  return (
    <>
        <Table className='animate__animated animate__backInLeft'>
            <thead>
                <tr>
                    <th scope='col'>Producto</th>
                    <th scope='col'>Precio</th>
                    <th scope='col'></th>
                </tr>
            </thead>
            <tbody>
                    {(products.length > 0) && (
                        products.map((product) => 
                            <tr key={product.id}>
                            <th scope='row'>{product.nombre}</th>
                            <td>{`$ ${product.precio}`}</td>
                            <td><img src={product.imagen} className='imageList' onClick={() => {setShowModal(true); setProductSelect(product)}}/></td>
                            </tr>
                        ))
                    }
            </tbody>

        </Table>
        <ModalImage show ={showModal} onHide = {() => setShowModal(false)} product = {productSelect}/>
    </>
  )
}
