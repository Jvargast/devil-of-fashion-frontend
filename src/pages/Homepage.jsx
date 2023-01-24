import React from 'react'
/* import Announcement from '../components/Announcement' */
import Carousel from '../components/Carousel'
import Categories from '../components/Categories'
import ComingSoon from '../components/ComingSoon'
import Instagram from '../components/Instagram/Instagram'


const Homepage = () => {
  const images = [{url:'DF-01.png', id:1},{url:'DF-02.png', id:2},{url:'DF-03.png', id:3}, {url:'DF-04.png', id:4}];
  const info = ['VER MÁS', 'VER MÁS', 'COMPRAR AHORA', 'VER MÁS'];
  return (
    <div style={{paddingTop:"100px"}}>
        {/* <Announcement/> */}
        <Carousel images={images} autoPlay={true} info={info}/>
        <Categories/>
        <ComingSoon/> 
        <Instagram/> 
    </div>
  )
}

export default Homepage
