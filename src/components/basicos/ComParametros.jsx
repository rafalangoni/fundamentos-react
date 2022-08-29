import React from "react";

export default function ComParametros({id, aluno, nota, titulo}){
    
    const status = nota >= 7 ? 'Aprovado' : 'Reprovado'
    
    return (
        <div>
            <h3>{id}</h3>
            <p>O aluno {aluno} tem nota {nota}</p>
            <p>Portanto, seu status é {status}</p>
        </div>
    )
}