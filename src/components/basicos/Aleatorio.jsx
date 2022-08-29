import React from "react";

const Aleatorio = ({ min, max, titulo }) => {
  const numeroAleatorio = parseInt(Math.random() * (max - min) - min);

  return (
    <>
      <p>
        O número aleatório é <strong>{numeroAleatorio}</strong>
      </p>
    </>
  );
};

export default Aleatorio;
