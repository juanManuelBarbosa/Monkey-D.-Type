import React, { useState, useEffect } from "react";
import '../styles/time.css'
const Time = ({init, contTime , setsuccess, playImage, setPlayImage }) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);


//manejo de contador
  useEffect(() => {
    if (init) {
      setIsActive(true);  
    } else {
      setIsActive(false); 
      setTime(contTime);  
    }
  }, [init, contTime]);

  useEffect(() => { 
    let intervalID;
    if (isActive) { 
      intervalID = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            endgame(); 
            clearInterval(intervalID); 
            return 0;
          }
        });
      }, 1000);
    }

    if (playImage) {
      clearInterval(intervalID);
    }

    return () => clearInterval(intervalID); 
  }, [isActive, playImage]);

  const endgame= ()=>{
   
    setsuccess("Lo siento, pero no completaste la frase!")
    setPlayImage(true)
  }


  return <>
    <span className="time">
      {time}
    </span></>;
};

export default Time;
