import React from "react";
import "./CardDisplay.css";
import BannerDisplay from "./BannerDisplay";
import Dados from "./Dados";

const CardDisplay = (props) => {


    let tipo1 = "";
    let tipo2 = "";

    switch(props.pokemon.types[0].type.name) {
        case "normal":
          tipo1="Normal";
          break;
        case "fire":
          tipo1="Fogo"
          break;
        case "fighting":
            tipo1="Lutador"
            break;
        case "water":
            tipo1="Água"
            break;
        case "flying":
            tipo1="Voador"
            break;
        case "grass":
            tipo1="Grama"
            break;
        case "poison":
            tipo1="Veneno"
            break;
        case "electric":
            tipo1="Elétrico"
            break;
        case "ground":
            tipo1="Terra"
            break;
        case "psychic":
            tipo1="Psiquico"
            break;
        case "rock":
            tipo1="Pedra"
            break;
        case "ice":
            tipo1="Gelo"
            break;
        case "bug":
            tipo1="Inseto"
            break;
        case "dragon":
            tipo1="Dragão"
            break;
        case "ghost":
            tipo1="Fantasma"
            break;
        case "dark":
            tipo1="Sombrio"
            break;
        case "steel":
            tipo1="Aço"
            break;
        case "fairy":
            tipo1="Fada"
            break;
        default:
          tipo1=""
      }

      if(props.pokemon.types.length > 1){
        switch(props.pokemon.types[1].type.name) {
            case "normal":
              tipo2="Normal";
              break;
            case "fire":
              tipo2="Fogo"
              break;
            case "fighting":
                tipo2="Lutador"
                break;
            case "water":
                tipo2="Água"
                break;
            case "flying":
                tipo2="Voador"
                break;
            case "grass":
                tipo2="Grama"
                break;
            case "poison":
                tipo2="Veneno"
                break;
            case "electric":
                tipo2="Elétrico"
                break;
            case "ground":
                tipo2="Terra"
                break;
            case "psychic":
                tipo2="Psiquico"
                break;
            case "rock":
                tipo2="Pedra"
                break;
            case "ice":
                tipo2="Gelo"
                break;
            case "bug":
                tipo2="Inseto"
                break;
            case "dragon":
                tipo2="Dragão"
                break;
            case "ghost":
                tipo2="Fantasma"
                break;
            case "dark":
                tipo2="Sombrio"
                break;
            case "steel":
                tipo2="Aço"
                break;
            case "fairy":
                tipo2="Fada"
                break;
            default:
              tipo2=""
          }
      }
     
    
    return (
        <div className="moldura_card_display rounded m-2">
            <BannerDisplay nome={props.pokemon.name} tipo={tipo1} />
            <div className="d-flex w-100 justify-content-center align-items-center">
                <div>
                    <img width="200" height="200" src={props.pokemon.sprites.front_default} />
                </div>
            </div>
            <Dados tipo1={tipo1} tipo2={tipo2} id={props.pokemon.id} altura={props.pokemon.height} peso={props.pokemon.weight} expBase={props.pokemon.base_experience} />
                
        </div>
    )
}

export default CardDisplay;