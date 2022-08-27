import React from "react";

export default function ComParametros({id, aluno, nota}){
    
    const status = nota >= 7 ? 'Aprovado' : 'Reprovado'
    
    return (
        <div>
            <h2>{id}</h2>
            <p>O aluno {aluno} tem nota {nota}</p>
            <p>Portanto, seu status é {status}</p>
        </div>
    )
}