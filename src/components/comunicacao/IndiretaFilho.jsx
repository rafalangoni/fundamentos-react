import React from "react";

const IndiretaFilho = (props) => {
  const passarInformacoes = () => {
    const idade = parseInt(Math.random() * (150 - 18) - 18);
    const nerd = Math.random() > 0.5;
    props.quandoClicar("Lucas", idade, nerd);
  };

  return (
    <div>
      <div>Filho</div>
      <button onClick={passarInformacoes}>
        Fornecer informacoes para o componente pai
      </button>
    </div>
  );
};

export default IndiretaFilho;
