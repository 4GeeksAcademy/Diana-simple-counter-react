import React from "react";
import Proptypes from "prop-types"


const UnidadesDeMillar = (props) => {
    return (
        <span>{props.seconds}</span>
    )
}

UnidadesDeMillar.propTypes= {
    seconds: Proptypes.number
}


export default UnidadesDeMillar;