import { IoMdClose } from "react-icons/io";
import '../../Home/home.css'
const Modal=({show,setshow,bmi})=>{
  
  return(
    
  show&&(

  <div className='modall'>
     
<div className='model' onClick={()=>{setshow(false)}} >

</div>
<div className='model1'>
  <div className="fs-4 close"> < IoMdClose onClick={()=>{setshow(false)}}/></div>
<p>
  {bmi}
  </p>
</div>
</div>
  ))
}
export default Modal