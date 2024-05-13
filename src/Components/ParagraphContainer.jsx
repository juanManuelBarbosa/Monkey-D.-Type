import React , {useState} from 'react'
import Time from './Time'
import Phrase from './Phrase'
import Menu from './Menu'
import '../styles/paragraphContainer.css'
const ParagraphContainer = ()=>{
    const [init , setInit] = useState(false)
    const[contTime, setContTime] = useState(30)
    

    return(<>
    <div className='container'>
        <Time init={init} contTime={contTime}  />
        <Phrase setInit={setInit} contTime={contTime} />
        <Menu setContTime={setContTime} contTime={contTime}/>
    </div >
        
    </>)
}
export default ParagraphContainer