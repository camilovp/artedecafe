import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <>
        <div className='footer p-3'>
            <i class="bi bi-instagram"><Link className='linkInsta' to="https://instagram.com/artedecafe21?igshid=ZDdkNTZiNTM=" target="_blank">#artedecafe21</Link></i>
        </div>
    </>
  )
}
