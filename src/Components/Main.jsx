import React from 'react'
import './Main.css'
import { Link } from 'react-router-dom'
const Main = () => {
  return (
    <div className='navbar'>
      <Link to='/'><p className='item'>Home</p></Link>
      <Link to='/second'><p className='item'>Students</p></Link>
      <Link to='/third'><p className='item'>Contact Us</p></Link>
    </div>
  )
}

export default Main
