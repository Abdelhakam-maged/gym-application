import React from 'react'
import Contactus from './Contactus/Contactus'
import Alexphoecix from './alex-phoenix/alexphoecix'
import Footer from '../footer/footer'
import Homecard from '../pagethree/COACHES-HOME/homecard'
import Map from './map/map'

export default function Contact() {
  return (
    <div className='pagethree'>
         <Homecard
        bgimg={"bg-homecontacts "}
        bgimgResponsive={'bg-img'}
        head={"CONTACT US"}
        text={"Pages-contact"}
        nav={false}
      />
      <Contactus/>
      <Alexphoecix/>
      <Map/>
      <Footer/>


    </div>
  )
}
