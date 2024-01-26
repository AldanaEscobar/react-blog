import React from "react";

function Note () {
    return (
        <div className="containerNote">
            <img className="imageNote" src={require("../assets/noteErgonomia.png")} alt="" />
            <div className="containerText">
                <h3 className="noteTitle">
                Ergonomía y bienestar emocional en el trabajo, van de la mano
                </h3>
                <p className="textNote">
                En el mundo laboral actual, la ergonomía es un concepto que va más allá de la comodidad física en el entorno de trabajo. Se ha convertido en un enfoque integral que no solo cuida de la salud física de los empleados, sino que también pone un énfasis significativo en su salud emocional, a través de la psicosociología.
                </p>
            </div>
        </div>
    );
}

export default Note;