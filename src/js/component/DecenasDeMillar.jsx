import React from "react";
import Proptypes from "prop-types"


const DecenasDeMillar = (props) => {
    return (
        <span>{props.seconds}</span>
    )
}

DecenasDeMillar.propTypes= {
    seconds: Proptypes.number
}


export default DecenasDeMillar;