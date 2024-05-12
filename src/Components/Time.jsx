import React, { useState, useEffect } from "react";
import '../styles/time.css'
const Time = ({init, contTime }) => {

  useEffect(()=>{
    setTime(contTime)
  } , [contTime]) 


  const [time, setTime] = useState(0);

  const gameOver = ()=>{
    console.log('fin del juego')
  }

  function startGame(){
    if(init){
      const intervalID = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
              gameOver()
            clearInterval(intervalID);
            
            return 0;
          }
        });
      }, 1000);
      // Limpiar el intervalo al desmontar el componente
      return () => clearInterval(intervalID);
    }
  }

  
  useEffect(() => {
      startGame()
  }, [init]); // Dependencia vacía para asegurar que el efecto solo se ejecute una vez

  return <>
    <span className="time">
      {time}
    </span></>;
};

export default Time;
