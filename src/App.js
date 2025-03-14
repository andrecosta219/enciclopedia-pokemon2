import React, {useState} from 'react';
import './App.css';
import Display from './componentes/Display';
import Buscador from './componentes/Buscador';

function App() {

  const [selecionado, setSelecionado] = useState(0);

  const mudarSelecionado = (pokemon) => {
      
      setSelecionado(pokemon);
      
  }

  return (
    <div className="App moldura-app p-5 m-3">
        <h1 className='text-center'>Enciclopedia Pokemon</h1>
        <div className='row'>
          <Buscador mudarSelecionado = {mudarSelecionado}/>
          <Display pokemon={selecionado}/>
        </div>
    </div>
  );
}

export default App;
