import React from "react";
import { useState } from "react";

const ComponenteControlado = (props) => {

    const [valor, setValor] = useState('Valor inicial')

    const quandoMudar = (evento) =>{
        setValor(evento.target.value)
    }

    return(
        <div>
            <div style={{marginBottom: '1rem'}}>            
                <span>Componente controlado</span>
                <input type="text" value={valor} onChange={quandoMudar}/>
            </div>
            <div style={{marginBottom: '1rem'}}>
                <span>Componente readonly</span>
                <input type="text" value={valor} readOnly/>
            </div>
            <div style={{marginBottom: '1rem'}}  >
                <span>Componente não controlado</span>
                <input type="text" value={undefined}/>
            </div>
            <p>Componente controlado através do useState quando da mudança no campo.</p>
        </div>
    )
}

export default ComponenteControlado