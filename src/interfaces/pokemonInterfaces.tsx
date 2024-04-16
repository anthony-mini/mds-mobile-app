export interface Name {
  fr: string;
  en: string;
  jp: string;
}

export interface Sprites {
  regular: string;
  shiny: string;
  gmax: string | null;
}

export interface Type {
  name?: string;
  image?: string;
}

export interface Talent {
  name?: string;
  tc?: boolean;
}

export interface Stats {
  hp: number;
  atk: number;
  def: number;
  spe_atk: number;
  spe_def: number;
  vit: number;
}

export interface Resistance {
  name: string;
  multiplier: number;
}

export interface Evolution {
  pokedex_id: number;
  name: string;
  condition: string;
  evolutionType: string;
  image: string;
}

export interface EvolutionChain {
  pre: Evolution[] | null;
  next: Evolution[] | null;
  mega: Evolution | null;
}

export interface Sexe {
  male: number;
  female: number;
}

export interface Data {
  pokedex_id: number;
  generation?: number;
  category?: string;
  name?: Name;
  sprites?: Sprites;
  types?: Type[];
  talents?: Talent[];
  stats?: Stats;
  resistances?: Resistance[];
  evolution?: EvolutionChain;
  height?: string;
  weight?: string;
  egg_groups?: string[];
  sexe?: Sexe;
  catch_rate?: number;
  level_100?: number;
  forme?: string | null;
  location?: {
    latitude: number;
    longitude: number;
  };
}

export interface Option {
  value: number;
  label: string;
}
export interface MultiSearch {
  value: string;
  label: string;
}

export interface Pokemon {
  pokedex_id: number;
  name?: Name;
}
export interface SelectProps {
  options: Option[];
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface MultiSearchComponentProps {
  setSelectedPokemons: (pokemons: Pokemon[]) => void;
  pokemons: Pokemon[] | Data[];
}

export interface PaginationProps {
  currentId: number;
}

export interface PokemonCardProps {
  pokedex_id: number;
  generation: number;
  category: string;
  name: {
    fr?: string;
    en?: string;
    jp?: string;
  };
  sprites: {
    regular?: string;
    shiny?: string;
    gmax?: null | string;
  };
  types: {
    name?: string;
    image?: string;
  }[];
  talents: {
    name?: string;
    tc?: boolean;
  }[];
  stats: {
    hp?: number;
    atk?: number;
    def?: number;
    spe_atk?: number;
    spe_def?: number;
    vit?: number;
  };
  resistances: {
    name?: string;
    multiplier?: number;
  }[];
  evolution: {
    pre?: null | { pokedex_id: number; name: string; condition: string };
    next?: { pokedex_id: number; name: string; condition: string }[];
    mega?: null | string;
  };
  height?: string;
  weight?: string;
  egg_groups?: string[];
  sexe?: {
    male?: number;
    female?: number;
  };
  catch_rate?: number;
  level_100?: number;
  formes?: null | string;
}
