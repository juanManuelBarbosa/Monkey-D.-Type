import React, { useState, useEffect } from "react";
import '../styles/time.css'
const Time = ({init, contTime }) => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    if (init) {
      setIsActive(true);  // => Comienza a contar cuando init es verdadero
    } else {
      setIsActive(false); // => Detiene el contador si init es falso
      setTime(contTime);  // => Reinicia el tiempo cuando init cambia
    }
  }, [init, contTime]);

  useEffect(() => { //=> inicia el contador cuando el usuario empieza a escribir, si la validacion es correcta
    let intervalID;
    if (isActive) { // => estado usado para validar el contador 
      intervalID = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            console.log('Fin del juego'); // => proximamente aca va a estar la funcion que se renderiza cuando finaliza el tiempo
            clearInterval(intervalID); 
            return 0;
          }
        });
      }, 1000);
    }
    return () => clearInterval(intervalID); // => Limpia el intervalo al desmontar el componente
  }, [isActive]);
  return <>
    <span className="time">
      {time}
    </span></>;
};

export default Time;
