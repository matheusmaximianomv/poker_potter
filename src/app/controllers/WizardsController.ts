import { Request, Response } from 'express';

import IWizard from '../models/IWizard';
import IPokemon from '../models/IPokemon';

import PokemonView from '../views/PokemonView';

import apiWizard from '../../services/wizard';
import apiPokemon from '../../services/pokemon';

import generateRandomNumber from '../utils/GenerateNumber';

class WizardsController {
  public async show(req: Request, res: Response): Promise<Response> {
    const { name } = req.params;

    const { data: wizards } = await apiWizard.get<IWizard[]>('/');
    const wizard = wizards.find((w) => w.name === name);
    const pokemonIds: number[] = [];

    for (let i = 0; i < 6; i++) {
      pokemonIds.push(generateRandomNumber());
    }

    const [
      { data: slot1 },
      { data: slot2 },
      { data: slot3 },
      { data: slot4 },
      { data: slot5 },
      { data: slot6 },
    ] = await Promise.all(
      pokemonIds.map((id) => apiPokemon.get<IPokemon>(`/${id}/`))
    );

    return res.status(200).json({
      wizard,
      pokemons: [
        PokemonView.show(slot1),
        PokemonView.show(slot2),
        PokemonView.show(slot3),
        PokemonView.show(slot4),
        PokemonView.show(slot5),
        PokemonView.show(slot6),
      ],
    });
  }
}

export default new WizardsController();
