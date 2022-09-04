import React from "react";
import If from "./If";

const UsuarioCondicional = (props) => {
  const usuario = props.usuario;
  return (
    <div>
      <If parametro={usuario && usuario.nome}>Seja bem-vindo, {usuario.nome}!</If>
      <If parametro={!usuario || !usuario.nome}>Seja bem-vindo, Anônimo...</If>
    </div>
  );
};

export default UsuarioCondicional;
