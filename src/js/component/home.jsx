import React from "react";
import Unidades from "../component/Unidades.jsx";
import Decenas from "../component/Decenas.jsx";
import Centenas from "../component/Centenas.jsx";
import UnidadesDeMillar from "../component/UnidadesDeMillar.jsx";
import DecenasDeMillar from "../component/DecenasDeMillar.jsx";
import CentenasDeMillar from "../component/CentenasDeMillar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

//create your first component
const Home = () => {
	return (
		<div className="text-center border" id="general__counter">
			<div className="numero__counter"> <FontAwesomeIcon icon={faClock} style={{ color: "#ffffff" }} />
 </div>
			<div className="numero__counter" id="centenasDeMillar">0<CentenasDeMillar/></div>
			<div className="numero__counter" id="decenasDeMillar">0<DecenasDeMillar/></div>
			<div className="numero__counter" id="unidadesDeMillar">0<UnidadesDeMillar/></div>
			<div className="numero__counter" id="centenas">0<Centenas/></div>
			<div className="numero__counter" id="decenas"> 0<Decenas/> </div>
			<div className="numero__counter" id="unidades"> 0<Unidades/> </div>

		</div>
	);
};

export default Home;
