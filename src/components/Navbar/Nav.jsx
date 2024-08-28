import React from 'react'
import "./Nav.css"

const Nav = () => {
  return (
    <header className='header'>

        <a href="/" className='logo'>Logo</a>

        <nav className='navbar'>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Services</a>
            <a href="">Contact</a>
            <a href="">Portfolio</a>
        </nav>
    </header>
  )
}
export default Nav