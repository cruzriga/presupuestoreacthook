import React, {useState} from 'react';
import Pregunta from "./components/Pregunta";
import Formulario from "./components/Formulario";
import Listado from "./components/Listado";
import ResultsDisplay from "./components/ResultsDisplay";

function App(){
    const [presupuesto, savePresupuesto] = useState(0);
    const [diff, saveDiff] = useState(0);
    const [presupuestoComponent, setPresupuestoComponent] = useState(true);
    const [error, setError ] = useState({});
    const [gastos, setGastos]  = useState([]);

    // cuando se agregan gastos o se eliminan se calcula la diferencia
    React.useEffect(()=> {
        let restante = presupuesto;
        // se acumulan los gastos
        if(gastos.length > 0) {
           let totalGastos = gastos.reduce((sum, {cant}) => {
                return (sum + cant);
            },0);
           // se calcula el nuevo restante
          restante = restante - totalGastos;
        }
        saveDiff(restante);
    },[gastos, presupuesto]);

    function deleteGasto(id){
        if(id){
            setGastos((prevGastos)=>{
                return(prevGastos.filter(gasto=>(gasto.id !== id)));
            })
        }
    }
    return (
        <div className="App container">
          <header>
            <h1>Gasto Semanal</h1>
              <div className="contenido contenido-principal">
                  { (presupuestoComponent)
                      ?
                      <Pregunta
                          savePresupuesto={savePresupuesto}
                          setPresupuestoComponent={setPresupuestoComponent}
                      />
                      :(
                       <div className="row">
                           <div className="one-half column">
                               <Formulario
                                   error={error}
                                   setError={setError}
                                   setGastos={setGastos}/>
                               <ResultsDisplay presupuesto={presupuesto} restante={diff}/>
                           </div>
                           <div className="one-half column">
                               <Listado gastos={gastos} deleteGasto={deleteGasto}/>
                           </div>
                       </div>
                      )
                  }
              </div>

          </header>
        </div>
    );
}

export default App;
