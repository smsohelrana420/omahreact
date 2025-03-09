import React from 'react'
import "./Properti.css"
import { FaArrowRightLong } from 'react-icons/fa6'

const Properti = () => {
  return (
    <section id='properti'>
        <div className="container">
            <div className="properti-title">
                <h2>Tahapan Pembelian Properti yang Mudah dan Cepat</h2>
            </div>
            <div className='properti_wrapper'>
                <div className='properti-cart-1'>
                    <h5>Pilih Properti <span>01</span></h5>
                    <p>Cari properti yang diinginkan sesuai dengan kriteria anda dan keluarga. Cara memilih properti yang bijak dapat anda baca lebih lanjut di sini</p>
                    <a href="">Baca lebih Lanjut <FaArrowRightLong /></a>
                </div>
                <div className='properti-cart-1'>
                    <h5>Proses Booking <span>02</span></h5>
                    <p>Cari properti yang diinginkan sesuai dengan kriteria anda dan keluarga. Cara memilih properti yang bijak dapat anda baca lebih lanjut di sini</p>
                    <a href="">Baca lebih Lanjut <FaArrowRightLong /></a>
                </div>
                <div className='properti-cart-1'>
                    <h5>KPR dan Sertifikasi <span>03</span></h5>
                    <p>Cari properti yang diinginkan sesuai dengan kriteria anda dan keluarga. Cara memilih properti yang bijak dapat anda baca lebih lanjut di sini</p>
                    <a href="">Baca lebih Lanjut <FaArrowRightLong /></a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Properti