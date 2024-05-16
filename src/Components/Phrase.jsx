import React, { useEffect, useState } from "react";
import '../styles/phrase.css';
import data from '../phrases.json';

const Phrase = ({ setInit, contTime }) => {

  //inicializacion de los hooks
  const [typedText, setTypedText] = useState("");
  const [canDelete, setCanDelete] = useState(true);
  const [playImage, setPlayImage] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState({});
  const[TeclasXSegundo ,  setTeclasXSegundo] = useState(0)

//reseteo de la pagina cuando cambias el tiempo en el menú
  useEffect(() => {
    setTypedText('');
    setInit(false);
    selectRandomPhrase();
    let input = document.getElementsByClassName('input')[0];
    input.focus();
  }, [contTime]); 

//funcion que busca un indice random de la data Json 
  const selectRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const selectedPhrase = data[randomIndex];
    setCurrentPhrase(selectedPhrase);
    setPlayImage(false);
  };


//evento que obtiene el valor del campo de texto del input y lo compara con la frase si es correcto muestra la imagen
  const handleChange = (e) => {
    const inputText = e.target.value;
    setTypedText(inputText);
    setInit(true);
    if (inputText === currentPhrase.frase) {
      setPlayImage(true);
    } else if (inputText === currentPhrase.frase.substring(0, inputText.length)) {
      setCanDelete(false);
    } else {
      setCanDelete(true);
    }
  };


//evento que maneja la pulsacion de las teclas y previene que se borren si es correcto  
  const handleKeyDown = (e) => {
    if (!canDelete && e.key === "Backspace") {
      e.preventDefault();
    }
  };



  return (
    <>
      <div className="contenedor">
        {currentPhrase.frase && currentPhrase.frase.split("").map((letter, index) => {
          let color = "gray";                           //establece todo a gris  
          let active = "";
          if (index === typedText.length) {             //va manejando la posicion del estado actibo para mover el cursor de texto
            active = 'active';
          }                                                             
          if (index < typedText.length) {                //va cambiando el color si es correcto o no 
            if (typedText[index] === letter) {
              color = "#cccccc";
            } else {
              color = "red";
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
        className="input"
      />

      {playImage && currentPhrase.urlImagen && (
        <div className="image-container show">
          <h2 className="fade-in">¡Bien Hecho!</h2>
          <h2 className="fade-in">Puntuación:</h2>
          <img src={currentPhrase.urlImagen} alt="Image" className="fade-in" />
        </div>
      )}
    </>
  );
};

export default Phrase;
