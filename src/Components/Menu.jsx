import { IoHourglassOutline } from "react-icons/io5";
import '../styles/menu.css'
const Menu = ()=>{
    return <>
    <div>
    <div className="menu-time">
            <span className="clock-icon">{<IoHourglassOutline />}</span>
            <button className='boton-time'>15</button>
            <button className='boton-time'>30</button>
            <button className='boton-time'>45</button>
        </div>
    </div>
       
    </>
}
export default Menu