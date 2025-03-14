import React from "react";
import "./DadoTipo.css";

const DadoTipo = (props) => {

    const tipoRec = props.info;
    let tipoColocado = "";

    if(tipoRec == "Nada"){
        tipoColocado = "-"
    } else {
        tipoColocado = tipoRec;
    }

    return (
            <div className="d-flex flex-column col-4">
            <div>
                <p className="text-center">{props.legenda}</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <div className={`${props.info.toLowerCase()} w-100 p-2 rounded`}>
                    <h5 className="text-center tira_padrao">{tipoColocado}</h5>
                </div>
                
            </div>

        </div>
    )
}

export default DadoTipo;