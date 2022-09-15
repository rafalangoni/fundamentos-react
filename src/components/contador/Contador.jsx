import React from "react";
import { useState } from "react";

const Contador = () => {
  const [valor, setValor] = useState(0);

  const adicionar = () => {
    setValor(valor + 1);
  };

  const diminuir = () => {
    setValor(valor - 1);
  };

  return (
    <div>
      <h3>Contador</h3>
      <p>
        Valor: <span>{valor}</span>
      </p>
      <button onClick={adicionar}>+</button>
      <button onClick={diminuir}>-</button>
    </div>
  );
};

export default Contador;
