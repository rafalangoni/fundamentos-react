import React from "react";
import alunos from "../data/alunos";

const ListaAlunos = (props) => {
  const listaAlunosLI = alunos.map((aluno) => {
    return (
      <li key={aluno.id} style={{textAlign: 'left'}}>
       {`${aluno.id}) ${aluno.nome} => ${aluno.nota}`}
      </li>
    );
  });

  return (
    <div>
      <ul style={{ listStyle: "none" }}>{listaAlunosLI}</ul>
    </div>
  );
};

export default ListaAlunos;
