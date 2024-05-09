import React , {useState} from 'react'
import Time from './Time'
import Phrase from './Phrase'
import Menu from './Menu'
import '../styles/paragraphContainer.css'
const ParagraphContainer = ()=>{
    const [init , setInit] = useState(false)

    return(<>
    <div className='container'>
        <Time init={init} />
        <Phrase setInit={setInit}/>
        <Menu/>
    </div>
        
    </>)
}
export default ParagraphContainer