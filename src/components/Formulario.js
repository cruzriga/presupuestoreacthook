import React from 'react';
import ErrorAlert from "./ErrorAlert";
import shortid from 'shortid';
function Formulario(props){
    const gastoInit = {id: '', nombre : '', cant : 0};
    let errorInit = { estatus: false, m : ''};
    const [gasto, setGasto]  = React.useState(gastoInit);
    const {setGastos, error, setError } = props;

    React.useEffect(()=>{
        setError(errorInit);
    },[]);

    const formHandle = e =>{
        setGasto({...gasto,[e.target.name] : e.target.value});
    };

    const formSubmit = e =>{
        e.preventDefault();
        let ngasto= {...gasto};
        ngasto.cant = parseInt(gasto.cant,10);
        ngasto.id = shortid.generate();
        if(ngasto.nombre === '' || ngasto.cant < 1 || isNaN(ngasto.cant)){
            let newError = {status : true, m: 'Debe agregar un nombre y cantidad correcta para el presupuesto'};
            setError(newError);
            return;
        }

        setError(errorInit);
        setGastos(preGastos => ([...preGastos, ngasto]));
        setGasto(gastoInit);
    };


    return(
        <form action="" onSubmit={formSubmit}>
            <h2>Agrega tus gastos</h2>
            <ErrorAlert error={error.status} m={error.m}/>
            <div className="campo">
                <label htmlFor=""> Nombre Gasto </label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    name="nombre"
                    onChange={formHandle}
                    value={gasto.nombre}
                />
            </div>
            <div className="campo">
                <label htmlFor=""> Cantidad Gasto </label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    name="cant"
                    onChange={formHandle}
                    value={gasto.cant}
                />
            </div>
            <input type="submit" className="button-primary u-full-width" value="Agergar gasto"/>
        </form>
    )
}
export default Formulario;