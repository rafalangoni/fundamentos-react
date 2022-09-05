import React from "react";

const IndiretaFilho = (props) =>{
const passarInformacoes = () =>{
    props.quandoClicar('Lucas', 40, true)
}

    return (
        <div>
           <div>Filho</div>
           <button onClick={passarInformacoes}>Fornecer informacoes para o componente pai</button>
        </div>
    )
}

export default IndiretaFilho;