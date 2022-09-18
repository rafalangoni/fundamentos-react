import React from "react";
import { useState } from "react";

const Contador = () => {
  const [valor, setValor] = useState(0);
  const [passo, setPasso] = useState(1)

  const adicionar = () => {
    setValor(valor + passo);
  };

  const diminuir = () => {
    setValor(valor - passo);
  };

  const usaPasso = (evento) => {
    setPasso(parseInt(evento.target.value))
  };

  return (
    <div>
      <h3>
        <strong>Contador</strong>
      </h3>
      <label htmlFor="inputPasso">Passo </label>
      <input onChange={usaPasso} type="number" id="inputPasso"></input>
      <p>
        Valor: <span>{valor}</span>
      </p>
      <button onClick={adicionar}>+</button>
      <button onClick={diminuir}>-</button>
      <p>Reforçando conceitos de useState</p>
    </div>
  );
};

export default Contador;
