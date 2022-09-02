import React from "react";
import compras from "../data/compras";

const ListaCompras = () => {
  function criaLinha() {
    return compras.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.produto}</td>
          <td>R${item.preco.toFixed(2)}</td>
        </tr>
      );
    });
  }
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <td>ID</td>
            <td>Produto</td>
            <td>Preço</td>
          </tr>
        </thead>
        <tbody>{criaLinha()}</tbody>
      </table>
    </div>
  );
};

export default ListaCompras;
