import React, {Fragment, useState, useEffect} from 'react';
import ErrorAlert from "./ErrorAlert";

function Pregunta (props){
    const [cant, saveCant] = useState(0);
    const [error , saveError] = useState(false);
    const lang = {
        title : "Coloca tu presupuesto",
        placeholder : "Agrega tu presupuesto",
        btn : "Denfinir Presupuesto",
        error: {
            wrongNumber : "Presupuesto es incorrecto"
        }};
    const {savePresupuesto,setPresupuestoComponent} = props;


    const agregarPresupuesto = e => {
        e.preventDefault();
       if(isNaN(cant) || cant < 1 || cant === '' || cant === null) {
           saveError(true);
           return;
       }

       saveError(false);
       savePresupuesto(cant);
       setPresupuestoComponent(false);
    };
        return (
            <Fragment>
                <h2> {lang.title}</h2>
                <ErrorAlert error={error} m={lang.error.wrongNumber} />
                <form onSubmit={agregarPresupuesto}>
                    <input
                        type="number"
                        placeholder={lang.placeholder}
                        className="u-full-width"
                        onChange={ e => saveCant(parseInt(e.target.value,10))}
                    />

                    <input
                        type="submit"
                        className="button-primary u-full-width"
                        value={lang.btn}/>
                </form>
            </Fragment>
        );
}

export default Pregunta;