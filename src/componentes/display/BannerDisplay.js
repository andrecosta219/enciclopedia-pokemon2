import React from "react";
import "./BannerDisplay.css";

const BannerDisplay = (props) => {
    return (
        <div className={`d-flex align-items-center justify-content-center w-100 casca_banner_display rounded-top ${props.tipo.toLowerCase()}`}>
            <h2 className={`text-center tira_padrao`}>{props.nome.toUpperCase()}</h2>
            
        </div>
    )
}

export default BannerDisplay;