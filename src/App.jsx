import React from "react";
import ComParametros from "./components/basicos/ComParametros";
import Aleatorio from "./components/basicos/Aleatorio";

export default function App() {
  return (
    <>
      <ComParametros 
      id="Segundo Componente" 
      aluno="Rafael" 
      nota={6} />
      <Aleatorio 
        min={1} 
        max={10} />
    </>
  );
}
