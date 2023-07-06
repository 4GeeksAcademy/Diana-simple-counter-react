import React from "react";
import Proptypes from "prop-types"


const CentenasDeMillar = (props) => {
    return (
        <span>{props.seconds}</span>
    )
}

CentenasDeMillar.propTypes= {
    seconds: Proptypes.number
}


export default CentenasDeMillar;