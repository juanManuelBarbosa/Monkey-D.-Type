import { IoHourglassOutline } from "react-icons/io5";
import { VscDebugRestart } from "react-icons/vsc";

import '../styles/menu.css'
const Menu = ({setContTime })=>{

    return <>
    <div>
    <div className="menu-time">
           
            <a href="/" className="restart"> <span ><VscDebugRestart /></span></a>
            <span className="clock-icon">{<IoHourglassOutline />}</span>
            <button className='boton-time' onClick={()=>{setContTime(15)}}>15</button>
            <button className='boton-time' onClick={()=>{setContTime(30)}}>30</button>
            <button className='boton-time' onClick={()=>{setContTime(45)}}>45</button>
        </div>
    </div>
       
    </>
}
export default Menu