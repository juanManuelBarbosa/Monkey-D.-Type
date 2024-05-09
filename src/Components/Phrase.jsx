import React, { useState } from "react";
import '../styles/phrase.css'
const Phrase = ({setInit}) => {
  const phrase =
    "Voluntad heredada la era del destino y los sueños de la gente esas son cosas que nunca serán detenidas siempre y cuando la gente siga persiguiendo el significado de la libertad, nadie podrá quitárselas nunca Esas cosas nunca dejarán de existir";
  const [typedText, setTypedText] = useState("");
  const [canDelete, setCanDelete] = useState(true); 



  const handleChange = (e) => {
    const inputText = e.target.value;
    setTypedText(inputText);  
    setInit(true)

   if (inputText === phrase.substring(0, inputText.length)) {
      setCanDelete(false);
    } else {                                        //manejo de estado para permitir borrar o no 
      setCanDelete(true); 
    }
  };

  const handleKeyDown = (e) => {
    if (!canDelete && e.key === "Backspace") {      //previene el borrado siempre que la frase sea correcta 100%
      e.preventDefault(); 
    }
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
          let color = "gray"; 
          let active = ""; 
          if (index === typedText.length) {
            active ='active';
          }
          if (index < typedText.length) {
            if (typedText[index] === letter) {
              color = "#cccccc";                    // El carácter escrito coincide, se vuelve blanco
            } else {
              color = "red";                        // El carácter escrito no coincide, se vuelve rojo
            }
          }
          return (
            <span key={index} style={{ color: color }} className={active} id="letter">
                {letter} 
            </span>
          );
        })}
      </div>

      <input 
      type="text" 
      value={typedText} 
      onChange={handleChange} 
      onKeyDown={handleKeyDown} 
      autoFocus 
      className="input"/>
    </>
  );
};

export default Phrase;
