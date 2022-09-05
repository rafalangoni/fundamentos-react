import React from "react";
import IndiretaFilho from "./IndiretaFilho";

const IndiretaPai = () => {
  function fornecerInformacoes(nome, idade, nerd) {
    console.log(nome, idade, nerd);
  }

  return (
    <div>
      <div>Pai</div>
      <div>
        <IndiretaFilho quandoClicar={fornecerInformacoes} />
      </div>
    </div>
  );
};

export default IndiretaPai;
