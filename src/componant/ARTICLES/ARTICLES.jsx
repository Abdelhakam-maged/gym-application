
import ARTICLESCARD from '../ARTICLESCARD/ARTICLESCARD';
import './ARTICLES.css';
import imagearcone from "../../images/download (1).jfif"
import imagearctwo from "../../images/download (2).jfif"
import imagearcthree from "../../images/download.jfif"
const ARTICLES = () => {

  
 

  return (
    <div className='articles componant-padding'>
    <div className='  componant-padding'>
    <div className='d-flex flex-wrap justify-content-center articlesheader'>
      <div className='classesheader text-center '>
    <div className=' textcolor fw-bold'><span className='headerspace' ></span> NEWS & ARTICLES</div>

    <h3  className='mt-3'>OUR RECENT ARTICLES </h3>
    </div>
    <button className=' ' > MORE ARTICLES</button>
    </div>

    
  
      <div className="d-flex flex-wrap  justify-content-center mt-5">

        
      <ARTICLESCARD imgsrc= {imagearcone}/>
        <ARTICLESCARD imgsrc= {imagearctwo}/>
        <ARTICLESCARD imgsrc= {imagearcthree}/>
          
         
            </div>  
    </div>
    </div>
  );
}

export default ARTICLES;
