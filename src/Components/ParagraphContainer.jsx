import React , {useState} from 'react'
import Time from './Time'
import Phrase from './Phrase'
import Menu from './Menu'
import '../styles/paragraphContainer.css'
const ParagraphContainer = ()=>{
    const [init , setInit] = useState(false)
    const[contTime, setContTime] = useState(30)
    const [playImage, setPlayImage] = useState(false);
    const[success, setsuccess] = useState(false)
    return(<>
    <div className='container'>
        <Time init={init} contTime={contTime} setPlayImage={setPlayImage}  playImage={playImage} setsuccess={setsuccess} />
        <Phrase setInit={setInit} contTime={contTime} playImage={playImage} setPlayImage={setPlayImage} success={success} setsuccess={setsuccess} />
        <Menu setContTime={setContTime} contTime={contTime}/>
    </div >
        
    </>)
}
export default ParagraphContainer