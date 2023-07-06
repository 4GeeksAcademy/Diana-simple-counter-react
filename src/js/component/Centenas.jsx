import React from "react";
import Proptypes from "prop-types"


const Centenas = (props) => {
    return (
        <span>{props.seconds}</span>
    )
}

Centenas.propTypes= {
    seconds: Proptypes.number
}


export default Centenas;