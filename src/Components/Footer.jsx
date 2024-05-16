import '../styles/footer.css'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = ()=>{
    return<>
    <div className="footerContainer">
        <p>Monkey D. Type</p>
        <div className='iconFooter'>
            <a href="https://www.linkedin.com/in/juan-manuel-barbosa-desarrollador/"><FaLinkedin /><span>Linkedin</span></a>
            <a href="https://github.com/juanManuelBarbosa/Monkey-D.-Type"><FaGithub /><span>git hub</span></a>
        </div>
        
   
    </div>
    
    </>
}
 export default Footer