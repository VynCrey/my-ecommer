import React from 'react'
import './NavBar.css'
import Button from '@mui/material/Button';
import CardWidget from '../CardWidget/CardWidget';


const NavBar = () => {
  return (
    <nav>
        <ul className='ul-1'>
            <li>about</li>
            <li>icont</li>
        </ul>
        <ul className='ul-2'>
            <li>contact</li>
            <li>about</li>
            <li>icont</li>
        </ul>
        <ul className='ul-3'>
          <li><Button variant="contained">Click Aqui</Button></li>
            <CardWidget/>
            
            
        </ul>
    </nav>
  )
}

export default NavBar 

