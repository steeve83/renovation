import React from 'react'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'

function Navbar () {
  return (
    <div className='navbar'>
      <div className='leftSide'>
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
        <img src={Menu} className='menu'alt='' width='20' />
      </div>

      <div className='rightSide'>
        <Link to='/'>Home</Link>
        <Link to='/projects'>Projects</Link>
        <Link to='/contractors'>Contractors</Link>
        <Link to='/login'>Login / Register</Link>
        <Link to='/contact'>Contact Us</Link>
      </div>
      <div className='nav-cart'>
        <span>0</span>
        <Link to='/cart'>
          <img src={CartIcon} alt='' width='20' />
        </Link>
        <img className='close' src={Close} alt='' width='20' />
      </div>
    </div>
  )
}

export default Navbar
