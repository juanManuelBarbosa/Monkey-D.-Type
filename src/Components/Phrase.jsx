import React, { useEffect, useState } from "react";
import '../styles/phrase.css';
import data from '../phrases.json';

const Phrase = ({ setInit, contTime }) => {
  const [typedText, setTypedText] = useState("");
  const [canDelete, setCanDelete] = useState(true);
  const [playImage, setPlayImage] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState({});

  useEffect(() => {
    setTypedText('');
    resetGame();
    selectRandomPhrase();
    let input = document.getElementsByClassName('input')[0];
    input.focus();
  }, [contTime]); 

  const selectRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const selectedPhrase = data[randomIndex];
    setCurrentPhrase(selectedPhrase);
    setPlayImage(false);
  };

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

  const handleKeyDown = (e) => {
    if (!canDelete && e.key === "Backspace") {
      e.preventDefault();
    }
  };

  const resetGame = () => {
    setInit(false);
  };

  return (
    <>
      <div className="contenedor">
        {currentPhrase.frase && currentPhrase.frase.split("").map((letter, index) => {
          let color = "gray";
          let active = "";
          if (index === typedText.length) {
            active = 'active';
          }
          if (index < typedText.length) {
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
