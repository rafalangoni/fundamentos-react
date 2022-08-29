import React from "react";
import "./Card.css";

const Card = (props) => {
  const cardStyle = {
    backgroundColor: props.color || "EC7272",
    borderColor: props.color || "EC7272",
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="titulo">{props.titulo}</div>
      <div className="conteudo">{props.children}</div>
    </div>
  );
};

export default Card;
