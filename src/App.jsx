import React from 'react'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'
import Properti from './Properti/Properti'
import Residen from './Residen/Residen'
import Berbagai from './Berbagai/Berbagai'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <Properti/>
      <Residen/>
      <Berbagai/>
    </div>
  )
}

export default App