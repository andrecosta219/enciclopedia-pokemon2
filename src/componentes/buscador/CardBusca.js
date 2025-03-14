import React, { useState } from "react";
import "./CardBusca.css";
import { useEffect } from "react";

const CardBusca = (props) =>{

    const clickHandler = (e) => {
        e.preventDefault();
        props.clicado(dadosDoPokemonBuscador);
    }

    const [dadosDoPokemonBuscador, setDadosDoPokemonBuscador] = useState();
    const [isLoading, setIsLoading] = useState(true);
    let tipo = "";

    useEffect(() => {
    
           
    
            fetch(props.url)
            .then((response)=>{
            return response.json();
             })
            .then((resData) => {
                
               console.log(resData);
               setDadosDoPokemonBuscador(resData);
               tipo = resData.types[0].type.name;
                console.log(tipo);
    
               setIsLoading(false)
                
            });
        
        }, []);

        

    return(
        <div className="col-4 d-flex justify-content-center align-items-center p-2">
            <div className="moldura_pokemon">
                <button onClick={clickHandler} className="p-0 card_pokemon">
                    <div className="d-flex m-0 p-1 align-items-center cabecalho_card_busca text-start text-bold">
                        {!isLoading && <h6 className="tira_padrao">{dadosDoPokemonBuscador.id}</h6>}
                    </div>
                    <div className="d-flex imagem_pokemon m-0 justify-content-center align-items-center">
                        {!isLoading && <img height="35" width="35" src={dadosDoPokemonBuscador.sprites.front_default} />}
                    </div>
                    {!isLoading && <div className={`d-flex p-1 nome_pokemon m-0 align-items-center justify-content-end ${dadosDoPokemonBuscador.types[0].type.name}`}><p className="text-end font-weight-bold text-capitalize tira_padrao">{props.nome}</p></div> }    
                </button>
            </div>
            
        </div>
    )
}

export default CardBusca;