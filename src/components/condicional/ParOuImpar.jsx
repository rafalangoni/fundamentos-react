import React from "react";

const ParOuImpar = (props) =>{
    const isPar = props.valor % 2 === 0;

    return(
        <div>
            {isPar ? <span>Par</span> : <span>Ímpar</span>}
        </div>

    )
}

export default ParOuImpar