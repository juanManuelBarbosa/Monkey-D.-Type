import React, { useEffect, useState } from "react";
import '../styles/phrase.css';
import data from '../phrases.json';
import { IoReloadOutline } from "react-icons/io5";


const Phrase = ({ setInit, contTime ,playImage , setPlayImage , success, setsuccess}) => {

  //inicializacion de los hooks
  const [typedText, setTypedText] = useState("");
  const [canDelete, setCanDelete] = useState(true);
  const [currentPhrase, setCurrentPhrase] = useState({});
  const[teclasXSegundo ,  setTeclasXSegundo] = useState(0)
  const [contadorDeTeclas, setContadorDeTeclas] = useState(0)
  const [errorCount, setErrorCount] = useState(0);  // Estado para contar errores

  
//reseteo de la pagina cuando cambias el tiempo en el menú
  useEffect(() => {
    setTypedText('');
    setInit(false);
    selectRandomPhrase();
    setTeclasXSegundo(contTime)
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
    setContadorDeTeclas(prevCount => prevCount + 1)
    if (inputText === currentPhrase.frase) {
      setsuccess("¡Felicidades, completaste la frase con exito!")
      setPlayImage(true);
    } else if (inputText === currentPhrase.frase.substring(0, inputText.length)) {
      setCanDelete(false);
    } else {
      setCanDelete(true);
      setErrorCount(prevErrorCount => prevErrorCount + 1);
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
          let color = "gray";                           
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
          <h2 className="fade-in">{success}</h2>
          <h3 className="fade-in">palabras por minuto (PPM): <span>{contadorDeTeclas !== 0 ? ((contadorDeTeclas / 5) * (60 / teclasXSegundo)).toFixed(2) : 0}</span>  </h3>   
          <h4 className="fade-in">cantidad de errores: <span>{errorCount}</span></h4>       
            <img src={currentPhrase.urlImagen} alt={`imagen ilustrativa de ${currentPhrase.nombrePersonaje}`} className="fade-in" />
            <a href="/" className="reload"><IoReloadOutline /></a>

        </div>
      )}
    </>
  );
};

export default Phrase;
