import React from 'react';
import Pokecard from './Pokecard'

function Pokedex({pokedex}) {
    return (
    <React.Fragment>
    <h3 className='title'>Pokedex:</h3>
      <div className="Pokedex">
        
        {pokedex.map(i => 
            <div key = {i.id}>
                <Pokecard pokemon = {i}/>
            </div>)}
      </div>
      </React.Fragment>
    );
  }
  
  export default Pokedex;
  