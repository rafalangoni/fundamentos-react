import React from "react";

/**
 * Componente filho passa as propriedades para o pai atravpes da funçao executada abaio
 * O componente pai passa a função como propriedade que será executada
 * É a forma do componente filho passar props para o componente pai
 */

const IndiretaFilho = (props) => {

  const passarInformacoes = () => {
    const idade = parseInt(Math.random() * (150 - 18) + 18);
    const nerd = Math.random() > 0.5;
    props.quandoClicar("Lucas", idade, nerd);
  };

  return (
    <div>
      <div>Componente Filho</div>
      <button onClick={passarInformacoes}>
        Fornecer informacoes para o componente pai
      </button>
    </div>
  );
};

export default IndiretaFilho;
