import React from 'react'
import { products } from '../data/productos'

export const getProductsByCategoria = (categoriaId) => {
    categoriaId = parseInt(categoriaId)
    const validarCategoria = [1,2,3,4,5,6];
    if (!validarCategoria.includes(categoriaId)){
        throw new Error(`${ categoriaId } is not a valid publisher`);
    }

    return products.filter( product => product.categoria === categoriaId);
}