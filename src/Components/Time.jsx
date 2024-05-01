import React, { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = useState(30);

  const gameOver = ()=>{
    console.log('fin del juego')
  }

  useEffect(() => {
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
  }, []); // Dependencia vacía para asegurar que el efecto solo se ejecute una vez

  return <>{time}</>;
};

export default Time;
