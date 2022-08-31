import React from "react";
import ComParametros from "./components/basicos/ComParametros";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import "./components/layout/Card.css";
import "../src/index.css";
import './App.css';

export default function App() {
  return (
    <>
      <h1>Fundamentos React</h1>
      <div className="cards">
        <Card titulo="Desafio Aleatório" cor="#E3C770">
          <Aleatorio min={1} max={10}/>
        </Card>

        <Card titulo="Componentes com parâmetros" cor="#FFAE6D">
          <ComParametros id="Segundo Componente" aluno="Rafael" nota={6}/>
        </Card>
      </div>
    </>
  );
}
