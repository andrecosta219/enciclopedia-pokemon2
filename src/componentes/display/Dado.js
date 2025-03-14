import React from "react";


const Dado = (props) => {



   

    return(
        <div className="d-flex flex-column col-4">
            <div>
                <p className="text-center">{props.legenda}</p>
            </div>
            <div>
                <h5 className="text-center">{props.info}</h5>
            </div>

        </div>
    )
}

export default Dado;