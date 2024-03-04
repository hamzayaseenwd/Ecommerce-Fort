import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        
        <div className="navbar bg-red-500 text-white">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">Nabvar</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/product'>Product</Link></li>
        
        
      </ul>
    </div>
  </div>
  
  
  </div>
  )
}

export default Navbar