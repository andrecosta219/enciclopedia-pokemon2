import React from "react";
import Dado from "./Dado";
import DadoTipo from "./DadoTipo";

const Dados = (props) => {
    return (
        <div className="mx-2">
            <div className="row">
                <Dado legenda={"Número"} info={props.id} />
                <DadoTipo legenda={"Tipo Primário"} info={props.tipo1} />
                <DadoTipo legenda={"Tipo Secundário"} info={props.tipo2}/>
            </div>
            <div className="row">
                <Dado legenda={"Experiência Base"} info={props.expBase}/>
                <Dado legenda={"Altura"} info={props.altura}/>
                <Dado legenda={"Peso"} info={props.peso}/>
            </div>

        </div>
    )
}

export default Dados;