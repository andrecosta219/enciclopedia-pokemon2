import React, { useEffect, useState } from "react";
import "./Buscador.css";
import CardBusca from "./buscador/CardBusca";

const Buscador = (props) => {

    const [isLoading, setIsLoading] = useState(true)
    const [listaDePokemons, setListadePokemons] = useState([]);


    useEffect(() => {

       

        fetch('https://pokeapi.co/api/v2/pokemon?limit=493')
        .then((response)=>{
        return response.json();
         })
        .then((resData) => {
            
           console.log(resData.results);
           setListadePokemons(resData.results);
           setIsLoading(false);

        });
    
    }, []);
    


    const funcEnvio = (pokemon) => {
        
        props.mudarSelecionado(pokemon);
    }

    

    return (
        <div className="col-6">
            <h4 className="text-start">Lista de Pokemons</h4>
            <div className="lista_pokemons">
                {!isLoading && <div className="row">{listaDePokemons.map(pokemon => <CardBusca key={pokemon.name} clicado={funcEnvio} nome={pokemon.name} url={pokemon.url}/>)}</div>}
            </div>
        </div>
    )
}

export default Buscador;