import React from 'react'
import "./Berbagai.css"
import berbagaiimage1 from "../../src/assets/Images/image 5.jpg"
import berbagaiimage2 from "../../src/assets/Images/image 6.png"
import berbagaiimage3 from "../../src/assets/Images/image 7.jpg"

const Berbagai = () => {
  return (
    <section id='berbagai'>
      <div className="container">
        <div className='berbagai-title'>
         <h5>Pilihan Auditor</h5>
         <h3>Residen Berbagai Kota</h3>
        </div>
        <div className='berbagai_wrapper'>
            <div className='berbagia-cart-1'>
              <img src={berbagaiimage1} alt="" />
              <h4>Magnolia Surabaya</h4>
              <p>Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec. Jatiuwung, Kota Tangerang, Banten 15136</p>
            </div>
            <div className='berbagia-cart-1'>
              <img src={berbagaiimage2} alt="" />
              <h4>Pinang Residences</h4>
              <p>Jl. Deplu Raya No.16 RT.5, RW.003
              Bintaro, Pesanggrahan, Jakarta Selatan 12330</p>
            </div>
            <div className='berbagia-cart-1'>
              <img src={berbagaiimage3} alt="" />
              <h4>South Grove</h4>
              <p>Jl. Gatot Subroto No.KM.6,8, RT.001/RW.008, Jatake, Kec. Jatiuwung, Kota Tangerang, Banten 15136</p>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Berbagai