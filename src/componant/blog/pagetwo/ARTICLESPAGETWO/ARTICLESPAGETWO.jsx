import React from 'react'
import imagearcone from "../../../../images/download (1).jfif"
import imagearctwo from "../../../../images/download (2).jfif"
import imagearcthree from "../../../../images/download.jfif"
import imagearcfour from "../../../../images/imagefour.jfif"
import imagearcfive from "../../../../images/imagefive.jfif"
import imagearcsex from "../../../../images/imagesix.jfif"
import "./ARTICLESPAGETWO.css"
import ARTICLESCARD from '../../../ARTICLESCARD/ARTICLESCARD'
export default function ARTICLESPAGETWO() {
  return (
    <div className='componant-padding articlescontainer '> 
          <div className=' text-center '>
    <div className=' textcolor fw-bold'><span className='headerspace' ></span> NEWS & ARTICLES</div>

    <h3  className='mt-3'>OUR RECENT ARTICLES </h3>
    </div>

    <div className="d-flex flex-wrap  justify-content-center mt-5">

    <ARTICLESCARD imgsrc= {imagearcone}/>
        <ARTICLESCARD imgsrc= {imagearctwo}/>
        <ARTICLESCARD imgsrc= {imagearcthree}/>
        <ARTICLESCARD imgsrc= {imagearcfour}/>
        <ARTICLESCARD imgsrc= {imagearcfive}/>
        <ARTICLESCARD imgsrc= {imagearcsex}/>
    </div>


    </div>
  )
}
