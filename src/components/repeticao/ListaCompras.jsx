import React from "react";
import compras from "../data/compras";
import './ListaCompras.css'

const ListaCompras = () => {
  function criaLinha() {
    return compras.map((item) => {
      return (
        <tr key={item.id} style={item.id % 2 === 0 ? {backgroundColor: '#FECD70'} : {backgroundColor: '#FFAE6D'}}>
          <td>{item.id}</td>
          <td>{item.produto}</td>
          <td>R${item.preco.toFixed(2)}</td>
        </tr>
      );
    });
  }
  return (
    <div>
      <table border={1} className='tabela-lista-compras'>
        <thead className="tabela-lista-compras--thead">
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
