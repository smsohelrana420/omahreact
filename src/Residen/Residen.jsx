import React from 'react'
import "./Residen.css"
import residen1image from "../../src/assets/Images/residen1.jpg"
import residen2image from "../../src/assets/Images/residen2.jpg"
import { FaPhone } from 'react-icons/fa6'

const Residen = () => {
  return (
    <section id='residen'>
     <div className="container">
        <div className="residen-title">
            <h5>Pilihan konsumen</h5>
            <h3>Residen Favorit</h3>
        </div>
        <div className='residen_wrapper'>
              <div className='residen_left'>
                       <img src={residen1image} className='residen1' alt="" />
                       <img src={residen2image} className='residen2' alt="" />
              </div>
              <div className='residen_right'>
                      <h2>Bangunan yang dirancang oleh Aristektur Handal</h2>
                      <p>Tanpa diragukan, properti yang disediakan dalam webiste kami merupakan hasil kerjasama secara profesional dengan para Arsitektur ternama dan Developer yang terpercaya.</p>
                      <div className='residen-btn'>
                      <button><FaPhone className='phone' /> Hubungi Kami</button>
                      <button className='secondary-btn'>Explore lebih banyak</button>
                      </div>
              </div>
        </div>
     </div>
    </section>
  )
}

export default Residen