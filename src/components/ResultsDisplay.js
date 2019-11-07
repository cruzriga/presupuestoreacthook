import React from 'react';
function ResultsDisplay({presupuesto, restante}){
    let className = 'primary';
    className = ((presupuesto / 2) > restante )? 'warning' : 'success';
    className = ((presupuesto / 4) > restante )? 'danger' : className;
    className = 'alert alert-'+className;
    let gastado = presupuesto - restante;


    return(
        <>
            <div className={`alert alert-primary`}>
                Presupuesto: $ {presupuesto}
            </div>
            <div className={`alert alert-${className}`}>
                Restante: $ {restante}
            </div>
            <div>
                Gastado: $ {gastado}
            </div>
        </>
    );
}
export default ResultsDisplay;