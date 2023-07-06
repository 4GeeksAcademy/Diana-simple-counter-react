import React from "react";
import Proptypes from "prop-types"


const Decenas = (props) => {
    return (
        <span>{props.seconds}</span>
    )
}

Decenas.propTypes= {
    seconds: Proptypes.number
}


export default Decenas;