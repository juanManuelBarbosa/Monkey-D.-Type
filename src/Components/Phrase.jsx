import React, { useState } from "react";

const Phrase = () => {
  const phrase =
    "Voluntad heredada la era del destino y los sueños de la gente esas son cosas que nunca serán detenidas siempre y cuando la gente siga persiguiendo el significado de la libertad, nadie podrá quitárselas nunca Esas cosas nunca dejarán de existir";
  const words = phrase.split(" ");
  const [typedText, setTypedText] = useState("");

  const handleChange = (e) => {
    const inputText = e.target.value;
    let newText = "";

    for (let i = 0; i < inputText.length; i++) {
      if (inputText[i] === phrase[i]) {
        newText += `<span style="color: white">${inputText[i]}</span>`;
      } else {
        newText += `<span style="color: red">${inputText[i]}</span>`;
      }
    }

    setTypedText(newText);
  };

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: typedText }}></div>
      <p>Voluntad heredada la era del destino y los sueños de la gente esas son cosas que nunca serán detenidas siempre y cuando la gente siga persiguiendo el significado de la libertad, nadie podrá quitárselas nunca Esas cosas nunca dejarán de existir</p>
      <input type="text" onChange={handleChange} />
    </>
  );
};

export default Phrase;
