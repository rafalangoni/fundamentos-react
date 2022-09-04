import React from "react";
import ComParametros from "./components/basicos/ComParametros";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import "./components/layout/Card.css";
import "../src/index.css";
import "./App.css";
import Familia from "./components/basicos/Familia";
import MembroFamilia from "./components/basicos/MembroFamilia";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import ListaCompras from "./components/repeticao/ListaCompras";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioCondicional from "./components/condicional/UsuarioCondicional";

export default function App() {
  return (
    <>
      <h1>Fundamentos React</h1>
      <div className="cards">
        <Card titulo="#06 - Renderização Condicional" cor="#EC7272">
            <ParOuImpar valor={20}/>
            <UsuarioCondicional usuario={{nome: 'Rafael'}}/>
            <UsuarioCondicional usuario={{email: 'Rafael'}}/>
        </Card>

        <Card titulo="#05 - Desafio lista de compras" cor="#E3C770">
            <ListaCompras/>
        </Card>

        <Card titulo="#04 - Iteração na criação de elementos de elementos" cor="#874C62">
            <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#03 - Lidando com Componentes filhos" cor="#7FBCD2">
          <Familia sobrenome='Sobrenome'>
            <MembroFamilia nome="Rafael" />
            <MembroFamilia nome="João" />
            <MembroFamilia nome="Pedro" />
          </Familia>
        </Card>

        <Card titulo="#02 - Desafio número Aleatório" cor="#E3C770">
          <h4>Números mega-sena:</h4>
          <Aleatorio min={1} max={60} />
          <Aleatorio min={1} max={60} />
          <Aleatorio min={1} max={60} />
          <Aleatorio min={1} max={60} />
          <Aleatorio min={1} max={60} />
          <Aleatorio min={1} max={60} />
        </Card>

        <Card titulo="#01 - Componentes com parâmetros" cor="#FFAE6D">
          <ComParametros id="Segundo Componente" aluno="Rafael" nota={6} />
        </Card>
      </div>
    </>
  );
}
