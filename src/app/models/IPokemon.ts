interface ITypes {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

interface ISprites {
  other: {
    'official-artwor': {
      front_default: string;
    };
  };
}

export default interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  types: Array<ITypes>;
  sprites: ISprites;
}
