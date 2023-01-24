import './App.css';
import Pokedex from './Pokedex';



function App({testDex}) {
  return (
    <div className="App">
      <Pokedex pokedex = {testDex}/>
    </div>
  );
}

export default App;
