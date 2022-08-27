import React from "react";

const Aleatorio = ({min, max}) => {
  const numeroAleatorio = Math.random() * (max - min) - min;
  
    return (
    <>
      <h2>O número aleatório é {numeroAleatorio}</h2>
    </>
  );
};

export default Aleatorio;
