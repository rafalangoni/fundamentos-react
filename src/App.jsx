import React from "react";
import ComParametros from "./components/basicos/ComParametros";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";

export default function App() {
  return (
    <>
      <Card>
        <ComParametros id="Segundo Componente" aluno="Rafael" nota={6} />
        <Aleatorio min={1} max={10} />
      </Card>
    </>
  );
}
