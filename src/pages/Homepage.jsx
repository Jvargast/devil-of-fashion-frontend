import React from 'react'
import Announcement from '../components/Announcement'
import Carousel from '../components/Carousel'
import Categories from '../components/Categories'
import ComingSoon from '../components/ComingSoon'
import Footer from '../components/Footer'
import Instagram from '../components/Instagram/Instagram'
import NavBar from '../components/NavBar'


const Homepage = () => {
  const images = ['DF-01.png','DF-02.png','DF-03.png', 'DF-04.png'];
  const info = ['VER MÁS', 'VER MÁS', 'COMPRAR AHORA', 'VER MÁS'];
  return (
    <div>
        <Announcement/>
        <NavBar/>
        <Carousel images={images} autoPlay={true} info={info}/>
        <Categories/>
        <ComingSoon/>
        <Instagram/>
        <Footer/>
    </div>
  )
}

export default Homepage
