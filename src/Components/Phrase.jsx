import React, { useEffect, useState } from "react";
import '../styles/phrase.css'
const Phrase = ({setInit , contTime}) => {
  const phrase =
    "gold d roger";
  const [typedText, setTypedText] = useState("");
  const [canDelete, setCanDelete] = useState(true); 
  const [playImage, setPlayImage] = useState(false);

  useEffect(() => {
    setTypedText('');
    resetGame()
    let input = document.getElementsByClassName('input')[0]
    input.focus()
  }, [contTime]); 

  const handleChange = (e) => {
    const inputText = e.target.value;
    setTypedText(inputText);  
    setInit(true)

    if (inputText === phrase) { // Verificar si el texto ingresado coincide con la frase completa
      setPlayImage(true); // Activar la reproducción del video
    } else if (inputText === phrase.substring(0, inputText.length)) {
      setCanDelete(false);
    } else {
      setCanDelete(true);
    }
  };

  const handleKeyDown = (e) => {
    if (!canDelete && e.key === "Backspace") {               //previene el borrado siempre que la frase sea correcta 100%
      e.preventDefault(); 
    }
  };


  const resetGame = () => {
    let letters = document.getElementsByClassName("letter"); // Obtener la colección de elementos
    [...letters].forEach((letter) => {
      letter.style.color = 'gray';                          // Restablecer el color a gris para cada elemento
    });
    setInit(false)
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
              color = "#cccccc";                                    // El carácter escrito coincide, se vuelve blanco
            } else {
              color = "red";                                       // El carácter escrito no coincide, se vuelve rojo
            }
          }
          return (
            <span key={index} style={{ color: color }} className={`${active} letter`}>
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

    {playImage && (
        <img src="https://www.hdwallpapers.in/thumbs/2021/gol_d__roger_hd_one_piece-t2.jpg"/>
      )}
    </>
  );
};

export default Phrase
