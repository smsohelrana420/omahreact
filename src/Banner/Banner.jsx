import React from 'react'
import "./banner.css"
import { FaLocationDot } from "react-icons/fa6";
import bannerimage from "../assets/Images/bannerimage.png"

const Banner = () => {
  return (
    <section id='banner'>
         <div className="container">
            <div className='banner_wrapper'>
                 <div className='banner_left'>
                   <h1>Temukan Hunian Keluarga Sesuai Keinginanmu</h1>
                   <p>Menyediakan hunian bagi keluarga anda dengan varian pilihan dan lokasi yang strategis di kota anda dengan cara yang lebih mudah.</p>
                   <div className='input_box'>
                   <FaLocationDot className='location'/>
                    <input type="text" placeholder='Search location, properties, residental group' />
                    
                   <button>Search</button>

                   </div>
                 </div>
                 <div className='banner_right'>
                   <img src={bannerimage} alt="" />
                 </div>
            </div>
         </div>
    </section>
  )
}

export default Banner