import React from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { TablaMenu } from '../components/TablaMenu'

export const MenuList = () => {
    const navigate = useNavigate();
    const {categoryId} = useParams();
    const onNavigateBack = () =>{
        navigate(-1)
      }
      if (!categoryId){
        return <Navigate to='/' />
      }
  return (
    <><div className='body-background'>
        <div className='container'>
            <Link className='link h4 m-3' to='/'>...volver</Link>
            <TablaMenu categoryId = {categoryId}/>
        </div>
        </div>
    </>
  )
}
