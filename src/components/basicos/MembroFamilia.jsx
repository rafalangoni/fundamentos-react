import React from "react";

const MembroFamilia = (props) => {
  return (
    <div>
      {props.nome}<strong> {props.sobrenome}</strong>
    </div>
  );
};

export default MembroFamilia;
