import React from 'react';

function Listado({gastos, deleteGasto}) {
    function Item({gasto}){
        return(
            <li className="gastos">
                <p>
                    {gasto.nombre}
                    <span className="gasto">
                        $ {gasto.cant}
                    </span>
                    <button type='button' onClick={() => deleteGasto(gasto.id)}> X </button>
                </p>
            </li>
        )
    }
    const Items  = gastos.map(gasto =>(<Item key={gasto.id} gasto={gasto} />));
    return(
        <div className="gastos-realizados">
            <h2>Listado</h2>
            <ul className="listado">
                {Items}
            </ul>
        </div>
    );
}
export default Listado