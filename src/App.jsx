import React from 'react'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'
import Properti from './Properti/Properti'
import Residen from './Residen/Residen'
import Berbagai from './Berbagai/Berbagai'
import Footer from './Footer/Footer'
import FooterBottom from './FooterBottom/FooterBottom'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Properti/>
      <Residen/>
      <Berbagai/>
      <Footer/>
      <FooterBottom/>
    </div>
  )
}

export default App