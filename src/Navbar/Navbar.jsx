import React from 'react'
import "./navbar.css"
import Logo from "../../public/Group 8.png"

const Navbar = () => {
  return (
    <header>
          <div className="container">
          <nav>
            <div>
                <img src={Logo} alt="" />
            </div>
            <ul>
             <li><a className='active' href="#">Home</a></li>
             <li><a href="#">About</a></li>
             <li><a href="#">Properties</a></li>
             <li><a href="#">Contact</a></li>
             
            </ul>
           </nav>
          </div>
    </header>
  )
}

export default Navbar