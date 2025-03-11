import React from 'react'
import "./FooterBottom.css"
import footerbottom from "../assets/Images/frame2.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import { CgTwitter } from 'react-icons/cg'

const FooterBottom = () => {
  return (
    <div >
     <div className="footer-bottom">
        <div className='container'>
       <div className='footerbottom'>
       <div>
          <img src={footerbottom} alt="" />
        </div>
        <div className='footerbottomitem'>
           <ul>
            <li><FaInstagram /></li>
            <li><FaFacebookF /></li>
            <li><CgTwitter /></li>
            <li><FaLinkedinIn/></li>
           </ul>
        </div>
       </div>
        </div>
     </div>
    </div>
  )
}

export default FooterBottom