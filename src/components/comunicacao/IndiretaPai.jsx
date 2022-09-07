import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = () => {
  const [nome, setNome] = useState("Anônimo");
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);

  function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome)
    setIdade(idade)
    setNerd(nerd)
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
    </div>
  );
};

export default IndiretaPai;
