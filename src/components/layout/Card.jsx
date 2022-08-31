import React from "react";
import "./Card.css";

const Card = (props) => {
  const cardStyle = {
    backgroundColor: props.cor,
    borderColor: props.cor,
  };

  console.log(cardStyle);

  return (
    <div className="card" style={cardStyle}>
      <div className="titulo">{props.titulo}</div>
      <div className="conteudo">{props.children}</div>
    </div>
  );
};

export default Card;
