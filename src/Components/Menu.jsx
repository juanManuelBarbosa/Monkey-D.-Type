import { IoHourglassOutline } from "react-icons/io5";
import '../styles/menu.css'
const Menu = ({setContTime })=>{
    const handleClick = (time)=>{
        setContTime(time)
    }


    return <>
    <div>
    <div className="menu-time">
            <span className="clock-icon">{<IoHourglassOutline />}</span>
            <button className='boton-time' onClick={()=>{setContTime(15)}}>15</button>
            <button className='boton-time' onClick={()=>{setContTime(30)}}>30</button>
            <button className='boton-time' onClick={()=>{setContTime(45)}}>45</button>
        </div>
    </div>
       
    </>
}
export default Menu