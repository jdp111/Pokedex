

function Pokecard({pokemon}) {
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
    return (
      <div className="Pokecard">
        <p className="PokecardName">{pokemon.name}</p>
        <img src = {url} className="PokecardImage"/>
        <p className="PokecardType">Type: {pokemon.type}</p>
        <p className="PokecardEXP">EXP: {pokemon.base_experience}</p>
      </div>
    );
  }
  
  export default Pokecard;
  