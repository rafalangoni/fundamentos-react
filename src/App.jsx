import React from "react";
import ComParametros from "./components/basicos/ComParametros";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import "./components/layout/Card.css";
import "../src/index.css";
import "./App.css";
import Familia from "./components/basicos/Familia";
import MembroFamilia from "./components/basicos/MembroFamilia";

export default function App() {
  return (
    <>
      <h1>Fundamentos React</h1>
      <div className="cards">
        <Card titulo="Componentes filhos" cor="#7FBCD2">
          <Familia sobrenome='Langoni'>
            <MembroFamilia nome="Rafael" />
            <MembroFamilia nome="Davi" />
            <MembroFamilia nome="Natalia" />
          </Familia>
        </Card>

        <Card titulo="Desafio Aleatório" cor="#E3C770">
          <h4>Números mega-sena:</h4>
          <Aleatorio min={1} max={60} />
          <Aleatorio min={1} max={60} />
          <Aleatorio min={1} max={60} />
          <Aleatorio min={1} max={60} />
          <Aleatorio min={1} max={60} />
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="Componentes com parâmetros" cor="#FFAE6D">
          <ComParametros id="Segundo Componente" aluno="Rafael" nota={6} />
        </Card>
      </div>
    </>
  );
}
