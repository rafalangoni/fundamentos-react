import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = () => {
  const [nome, setNome] = useState("Anônimo");
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);

  function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);
  }

  return (
    <div>
      <div>
        <span>{nome} </span>
        <span>{idade} </span>
        <span>{nerd ? "Verdadeiro" : "Falso"}</span>
      </div>
      <div>
        <IndiretaFilho quandoClicar={fornecerInformacoes} />
      </div>
      <div>
        <p>Obs.: Nessa caso, o componente pai passa via props uma função a ser executada no componente filho.
          Dessa forma, quando a função for executada no componente filho, o filho passará os parâmetros da 
          execução de volta pro pai. É o equivalente ao filho passando props pro pai.
        </p>
      </div>
    </div>
  );
};

export default IndiretaPai;
