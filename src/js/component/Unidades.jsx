import React from "react";
import Proptypes from "prop-types"


const Unidades = (props) => {
    return (
        <span>{props.seconds}</span>
    )
}

Unidades.propTypes= {
    seconds: Proptypes.number
}


export default Unidades;