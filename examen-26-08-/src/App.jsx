import { useState } from 'react'
import './App.css'

function App() {
  const [resultado, setResultado] = useState(0);
  const [inputValor, setInputValor] = useState(0);
  
  const inputValue = ((even)=>{
    setInputValor(even.target.value);
    console.log(setInputValor);
  });

  const calcular = (operacion) => {
    const valorActual = parseFloat(inputValue);
    let resultado;

    switch (operacion) {
      case 'sumar':
        resultado = valorActual + valorActual;
        break;
      case 'restar':
        resultado = valorActual - valorActual;
        break;
      case 'multiplicar':
        resultado = valorActual * valorActual;
        break;
      case 'dividir':
        resultado = valorActual / valorActual;
        break;
      default:
        return;
    }

    setInputValor(resultado.toNumber());
  };

  return (
    <>
    <div>
      <input className='input' onChange={inputValue} type="number" value={setInputValor} />
    </div>
    <div className='numeros'>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
    </div>
    <div className='operaciones'>     
      <button className='sumar' onChange={() => calcular('sumar')}>sunar</button>
      <button className='dividir' onChange={() => calcular('dividir')}>dividir</button>
      <button className='restar' onChange={() => calcular('restar')}>restar</button>
      <button className='multiplicar' onChange={() => calcular('multiplicar')}>multiplicar</button>
      <button className='mostrar resultado' onChange={() => calcular('sumar')}>mostrar resultado</button>
    </div>

    </>
  )
}

export default App;
