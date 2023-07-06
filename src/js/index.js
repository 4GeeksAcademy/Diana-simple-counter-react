//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import Home from "./component/home.jsx";
import Unidades from "./component/Unidades.jsx";
import Decenas from "./component/Decenas.jsx";
import Centenas from "./component/Centenas.jsx";
import UnidadesDeMillar from "./component/UnidadesDeMillar.jsx";
import DecenasDeMillar from "./component/DecenasDeMillar.jsx";
import CentenasDeMillar from "./component/CentenasDeMillar.jsx";



//import your own components

//render your react application

// -------------------------------------------------------------

//Counter para las unidades

let seconds = 0;
const unidades = () => {
    if (seconds === 9) {
        seconds = 0;
      } else {
        seconds += 1;
      }
    ReactDOM.render(<Unidades seconds={seconds}/>, document.querySelector("#unidades"));
    
}
setInterval(unidades, 1000);



//Counter para las decenas

let secondsD = 0;
const decenas = () => { 
     if (secondsD === 9) { 
         secondsD = 0; 
       } else { 
         secondsD += 1; 
       }
    ReactDOM.render(<Decenas seconds={secondsD}/>, document.querySelector("#decenas"));
      
 }

setInterval(decenas, 10000); 


 //Counter para las centenas

let secondsC = 0;
const centenas = () => { 
     if (secondsC === 9) { 
         secondsC = 0; 
       } else { 
         secondsC += 1; 
       }

    ReactDOM.render(<Centenas seconds={secondsC}/>, document.querySelector("#centenas"));
      
 }
 
setInterval(centenas, 100000); 



 //Counter para las unidades de millar
 let secondsUM = 0;
 const unidadesDeMillar = () => { 
      if (secondsUM === 9) { 
          secondsUM = 0; 
        } else { 
          secondsUM += 1; 
        }
 
     ReactDOM.render(<UnidadesDeMillar seconds={secondsUM}/>, document.querySelector("#unidadesDeMillar"));
       
  }
 
setInterval(unidadesDeMillar, 1000000); 




 //Counter para las decenas de millar
 let secondsDM = 0;
 const decenasDeMillar = () => { 
      if (secondsDM === 9) { 
          secondsDM = 0; 
        } else { 
          secondsDM += 1; 
        }
 
     ReactDOM.render(<DecenasDeMillar seconds={secondsDM}/>, document.querySelector("#decenasDeMillar"));
       
  }

setInterval(decenasDeMillar, 10000000); 




//Counter para las centenas de millar

 let secondsCM = 0;
 const centenasDeMillar = () => { 
      if (secondsCM === 9) { 
          secondsCM = 0; 
        } else { 
          secondsCM += 1; 
        }
 
     ReactDOM.render(<CentenasDeMillar seconds={secondsCM}/>, document.querySelector("#centenasDeMillar"));
       
  }

setInterval(centenasDeMillar, 100000000); 




// -------------------------------------------------------------

ReactDOM.render(<Home />, document.querySelector("#app"));
