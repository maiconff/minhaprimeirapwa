import { useState } from "react";

function Calculo() {

    const [Peso, setPeso] = useState(0);
    const [Altura, setAltura] = useState(0);
    const [Resultado, setResultado] = useState(0);
    const [Classificaçao, setClassificaçao] = useState(0);

    return (
        <div style={{ padding : '20px'}}>
            <h1>Preencha o formulario</h1>
            <div className="mb-3">
  <label htmlfor="txtValor1" className="form-label">Valor 1</label>
  <input type="number" className="form-control" id="txtValor1" placeholder="Valor 1"  value={Peso}
                onChange={e => setPeso(e.target.value)}/>
</div>
<div className="mb-3">
  <label htmlfor="txtValor2" className="form-label">Valor 2</label>
  <input type="number" className="form-control" id="txtValor2" placeholder="Valor 2"  value={Peso}
                onChange={e => setPeso(e.target.value)}/>
</div>
<button type="button" className="btn btn-outline-success">Success</button>
            <label>Peso em KG:</label>
            <input type="number" value={Peso}
                onChange={e => setPeso(e.target.value)} /> <br />
            <label>Altura em cm:</label>
            <input type="number" value={Altura}
                onChange={e => setAltura(e.target.value)} /> <br />
            <label>Resultado:</label>
            <input type="number" value={Resultado} />
            <button onClick={
                () => {
                    setResultado(Number(Peso) / (Number(Altura) * Number(Altura)));
                    if(Resultado < 18){
                        setClassificaçao("magresa")
                    }
                }
                
            }> Resultado </button> <br/>
            {e => setResultado(e.target.value)}  <br />


            <h1>Resultado: {Resultado}</h1>
            <h1>Classificaçao : {Classificaçao}</h1>
        </div>
        
    );

}

export default Calculo;