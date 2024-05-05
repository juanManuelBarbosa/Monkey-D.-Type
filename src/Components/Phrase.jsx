import React, { useState } from "react";
import '../styles/phrase.css'
const Phrase = ({setInit}) => {
  const phrase =
    "Voluntad heredada la era del destino y los sueños de la gente esas son cosas que nunca serán detenidas siempre y cuando la gente siga persiguiendo el significado de la libertad, nadie podrá quitárselas nunca Esas cosas nunca dejarán de existir";
  const [typedText, setTypedText] = useState("");

  const handleChange = (e) => {
    const inputText = e.target.value;
    setTypedText(inputText);  
    setInit(true)
  };

  return (
    <>
      <div 
      className="contenedor"
      onClick={()=>{
        let input = document.getElementsByClassName("input")[0]
        input.focus() 
        }}>
        {phrase.split("").map((letter, index) => {
          let color = "gray"; // Color predeterminado
          let active = ""; // Inicialmente, no hay cursor activo
          if (index === typedText.length) {
            // Si el índice de la letra actual coincide con la longitud del texto escrito
            active ='active'; // Se activa el cursor
          }
          if (index < typedText.length) {
            // Si hay un carácter escrito en esta posición
            if (typedText[index] === letter) {
              color = "#cccccc"; // El carácter escrito coincide, se vuelve verde
            } else {
              color = "red"; // El carácter escrito no coincide, se vuelve rojo
            }
          }
          return (
            <span
              key={index}
              style={{ color: color }}
              className={active}
              id="letter"
              
            >
                {letter} 
            </span>
          );
        })}
      </div>

      <input type="text" value={typedText} onChange={handleChange} autoFocus className="input"/>
    </>
  );
};

export default Phrase;
