import imagenRickMorty  from './img/rick-morty.png';
import './App.css';
import Characters from './components/Characters';
import { useState } from 'react';

function App() {
  const [characters, setCharacters] = useState(null);

  const regApi = async () => {
    const api = await fetch('https://rickandmortyapi.com/api/character');
    const characterApi = await api.json();
  
    setCharacters(characterApi.results);
    
  }

  
  return (
    <div className="App">
      <header className='App-header'> 
        <h1 className='title'> Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters = {setCharacters}/>
        ) : (
          <>
             <img src={imagenRickMorty} alt='Rick & Morty' className='img-home' />
             <button onClick={regApi} className='btn-search'>Buscar Personaje</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
