import Boton from '../componentes/botones';
import Resultado from '../componentes/result';
import { useState } from 'react';


function Teclado(props) {
  const eventoBotonQ = () => {
    setContador(resultado + "q")

  }

  
  const eventoBotonW = () => {
    setContador(resultado + "w")

  }

  
  const eventoBotonE = () => {
    setContador(resultado + "e")

  }

  
  const eventoBotonR = () => {
    setContador(resultado + "r")

  }

  
  const eventoBotonT  = () => {
    setContador(resultado + "t")

  }

  const eventoBotonY  = () => {
    setContador(resultado + "y")

  }

  const eventoBotonU  = () => {
    setContador(resultado + "u")

  }

  const eventoBotonI  = () => {
    setContador(resultado + "i")

  }

  const eventoBotonO  = () => {
    setContador(resultado + "o")

  }

  const eventoBotonP  = () => {
    setContador(resultado + "p")

  }

  const eventoBotonS  = () => {
    setContador(resultado + "s")

  }

  const eventoBotonD  = () => {
    setContador(resultado + "d")

  }

  const eventoBotonF  = () => {
    setContador(resultado + "f")

  }

  const eventoBotonG  = () => {
    setContador(resultado + "g")

  }

  const eventoBotonH  = () => {
    setContador(resultado + "h")

  }

  const eventoBotonJ  = () => {
    setContador(resultado + "j")

  }

  const eventoBotonK  = () => {
    setContador(resultado + "k")

  }

  const eventoBotonL  = () => {
    setContador(resultado + "l")

  }

  const eventoBotonÑ  = () => {
    setContador(resultado + "ñ")

  }

  const eventoBotonA = () => {
    setContador(resultado + "a")

  }
  
  const eventoBotonZ = () => {

    setContador(resultado + "z")

  }

  const eventoBotonX = () => {

    setContador(resultado + "x")

  }
  const eventoBotonC = () => {

    setContador(resultado + "c")

  }
  const eventoBotonV = () => {

    setContador(resultado + "v")

  }
  const eventoBotonB = () => {

    setContador(resultado + "b")

  }
  const eventoBotonM = () => {

    setContador(resultado + "m")

  }
  const eventoBotonN = () => {

    setContador(resultado + "n")

  }
  const eventoEspacio = () => {

    setContador(resultado + " ")

  }
  const eventoBorrar = () => {
    
    setContador(resultado.substring(0, resultado.length - 1 ))


  }

  const [resultado, setContador] = useState("  ");
    return (
        
        <div>
        <Resultado result={resultado}></Resultado>
        <Boton pulsaBoton={ eventoBotonQ } letraBoton="q"></Boton>
        <Boton pulsaBoton={ eventoBotonW} letraBoton="w"></Boton>
        <Boton pulsaBoton={ eventoBotonE} letraBoton="e"></Boton>
        <Boton pulsaBoton={ eventoBotonR} letraBoton="r"></Boton>
        <Boton pulsaBoton={ eventoBotonT} letraBoton="t"></Boton>
        <Boton pulsaBoton={ eventoBotonY} letraBoton="y"></Boton>
        <Boton pulsaBoton={ eventoBotonU} letraBoton="u"></Boton>
        <Boton pulsaBoton={ eventoBotonI} letraBoton="i"></Boton>
        <Boton pulsaBoton={ eventoBotonO} letraBoton="o"></Boton>
        <Boton pulsaBoton={ eventoBotonP} letraBoton="p"></Boton>
        <br></br>
        <Boton pulsaBoton={ eventoBotonA } letraBoton="a"></Boton>
        <Boton pulsaBoton={ eventoBotonS } letraBoton="s"></Boton>
        <Boton pulsaBoton={ eventoBotonD } letraBoton="d"></Boton>
        <Boton pulsaBoton={ eventoBotonF } letraBoton="f"></Boton>
        <Boton pulsaBoton={ eventoBotonG } letraBoton="g"></Boton>
        <Boton pulsaBoton={ eventoBotonH } letraBoton="h"></Boton>
        <Boton pulsaBoton={ eventoBotonJ } letraBoton="j"></Boton>
        <Boton pulsaBoton={ eventoBotonK } letraBoton="k"></Boton>
        <Boton pulsaBoton={ eventoBotonL} letraBoton="l"></Boton>
        <Boton pulsaBoton={ eventoBotonÑ } letraBoton="ñ"></Boton>
        <br></br>
        <Boton pulsaBoton= { eventoBotonZ } letraBoton="z"></Boton>
        <Boton pulsaBoton= { eventoBotonX } letraBoton="x"></Boton>
        <Boton pulsaBoton= { eventoBotonC } letraBoton="c"></Boton>
        <Boton pulsaBoton= { eventoBotonV } letraBoton="v"></Boton>
        <Boton pulsaBoton= { eventoBotonB } letraBoton="b"></Boton>
        <Boton pulsaBoton= { eventoBotonN } letraBoton="n"></Boton>
        <Boton pulsaBoton= { eventoBotonM } letraBoton="m"></Boton>
        <br></br>
        <Boton pulsaBoton= { eventoEspacio} letraBoton="Espacio"></Boton>
        <Boton pulsaBoton= { eventoBorrar} letraBoton="Borrar"></Boton>
        </div>
        )
    }

 export default Teclado;