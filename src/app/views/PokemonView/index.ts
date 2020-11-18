import IPokemon from '../../models/IPokemon';

class PokemonView {
  public show(pokemon: IPokemon): IPokemon {
    const {
      id,
      name,
      base_experience,
      types,
      sprites,
      height,
      weight,
    } = pokemon;

    return { id, name, base_experience, types, sprites, height, weight };
  }
}

export default new PokemonView();
