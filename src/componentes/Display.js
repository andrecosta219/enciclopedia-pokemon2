import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./Display.css";
import CardDisplay from "./display/CardDisplay";



const Display = (props) => {

    
  

    return (
        <div className="col-6 tamanho_display">
            
            {(props.pokemon) !=0 && <CardDisplay pokemon={props.pokemon}/>}
            {(props.pokemon) == 0 && <h3 className="text-center align-items-center">Escolha um pokemon!</h3>}
        </div>
    )
}

export default Display;