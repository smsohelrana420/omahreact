import React from 'react'
import "./Footer.css"
import { FaPhone } from 'react-icons/fa6'
import footerImage from "../assets/Images/footerimage.png"

const Footer = () => {
  return (
    <footer>
           <div className="container">
           <div className="footer-title">
            <h3>Hubungi Kami</h3>
           </div>
           <div className='footer-top'>
              <div className='footer-cart-1'>
                <div className='footer-cart-1-phone'>
                <FaPhone />
                </div>
                <div className='footer-cart-1-item'>
                  <p>Call</p>
                  <a>+6281232936733</a>
                  <div className='footer-cart-1-btn'>
                  <button>Call Now</button>
                  </div>
                </div>
              </div>
              <div className='footer-cart-1'>
                <div className='footer-cart-1-phone'>
                <FaPhone />
                </div>
                <div className='footer-cart-1-item'>
                  <p>Call</p>
                  <a>+6281232936733</a>
                  <div className='footer-cart-1-btn'>
                  <button>Call Now</button>
                  </div>
                </div>
              </div>
           <div className="footer-right">
            <div>
               <h3>Penghargaan</h3>
               <img src={footerImage} alt="" />
            </div>
           </div>
           </div>
           </div>
    </footer>
  )
}

export default Footer