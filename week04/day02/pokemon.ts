class Pokemon {
  name: string;
  type: string;
  effectiveAgainst: string;
  constructor(pokName: string, pokType: string, effAgainst: string) {
    this.name = pokName;
    this.type = pokType;
    this.effectiveAgainst = effAgainst;
  }

  isEffectiveAgainst(pokemon: Pokemon) {
    return this.effectiveAgainst === pokemon.type;
  };
}

function ownPokemon(): Pokemon[] {
  return [
    new Pokemon('Charmander', 'fire', 'grass'),
    new Pokemon('Bulbasaur', 'grass', 'water'),
    new Pokemon('Squirtle', 'water', 'fire'),
    new Pokemon('Pikachu', 'electric', 'water'),
    new Pokemon('Chikorita', 'grass', 'electric')
  ]
}

let pokemonOfAsh: Pokemon[] = ownPokemon();
let wildPokemon: Pokemon = new Pokemon('Ponyta', 'fire', 'grass');

pokemonOfAsh.forEach(e => {
  if (e.isEffectiveAgainst(wildPokemon)) {
    console.log(e.name);
  }
});