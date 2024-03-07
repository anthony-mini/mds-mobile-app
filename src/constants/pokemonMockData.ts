// @ts-nocheck

import { PokemonCardProps } from '../interfaces/pokemonInterfaces';

export const mockGetAllPokemon = [
  {
    pokedex_id: 0,
    generation: 1,
    category: 'Pokémon Bug',
    name: {
      fr: 'MissingNo.',
      en: 'MissingNo.',
      jp: 'キャタピー',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/0/regular.png',
      shiny: null,
      gmax: null,
    },
    types: null,
    talents: null,
    stats: null,
    resistances: null,
    evolution: null,
    height: null,
    weight: null,
    egg_groups: null,
    sexe: null,
    catch_rate: null,
    level_100: null,
    formes: null,
  },
  {
    pokedex_id: 1,
    generation: 1,
    category: 'Pokémon Graine',
    name: {
      fr: 'Bulbizarre',
      en: 'Bulbasaur',
      jp: 'フシギダネ',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/1/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/1/shiny.png',
      gmax: null,
    },
    types: [
      {
        name: 'Plante',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png',
      },
      {
        name: 'Poison',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png',
      },
    ],
    talents: [
      {
        name: 'Engrais',
        tc: false,
      },
      {
        name: 'Chlorophylle',
        tc: true,
      },
    ],
    stats: {
      hp: 45,
      atk: 49,
      def: 49,
      spe_atk: 65,
      spe_def: 65,
      vit: 45,
    },
    resistances: [
      {
        name: 'Normal',
        multiplier: 1,
      },
      {
        name: 'Plante',
        multiplier: 0.25,
      },
      {
        name: 'Feu',
        multiplier: 2,
      },
      {
        name: 'Eau',
        multiplier: 0.5,
      },
      {
        name: 'Électrik',
        multiplier: 0.5,
      },
      {
        name: 'Glace',
        multiplier: 2,
      },
      {
        name: 'Combat',
        multiplier: 0.5,
      },
      {
        name: 'Poison',
        multiplier: 1,
      },
      {
        name: 'Sol',
        multiplier: 1,
      },
      {
        name: 'Vol',
        multiplier: 2,
      },
      {
        name: 'Psy',
        multiplier: 2,
      },
      {
        name: 'Insecte',
        multiplier: 1,
      },
      {
        name: 'Roche',
        multiplier: 1,
      },
      {
        name: 'Spectre',
        multiplier: 1,
      },
      {
        name: 'Dragon',
        multiplier: 1,
      },
      {
        name: 'Ténèbres',
        multiplier: 1,
      },
      {
        name: 'Acier',
        multiplier: 1,
      },
      {
        name: 'Fée',
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 2,
          name: 'Herbizarre',
          condition: 'Niveau 16',
        },
        {
          pokedex_id: 3,
          name: 'Florizarre',
          condition: 'Niveau 32',
        },
      ],
      mega: null,
    },
    height: '0,7 m',
    weight: '6,9 kg',
    egg_groups: ['Monstrueux', 'Végétal'],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 2,
    generation: 1,
    category: 'Pokémon Graine',
    name: {
      fr: 'Herbizarre',
      en: 'Ivysaur',
      jp: 'フシギソウ',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/2/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/2/shiny.png',
      gmax: null,
    },
    types: [
      {
        name: 'Plante',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png',
      },
      {
        name: 'Poison',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png',
      },
    ],
    talents: [
      {
        name: 'Engrais',
        tc: false,
      },
      {
        name: 'Chlorophylle',
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 62,
      def: 63,
      spe_atk: 80,
      spe_def: 80,
      vit: 60,
    },
    resistances: [
      {
        name: 'Normal',
        multiplier: 1,
      },
      {
        name: 'Plante',
        multiplier: 0.25,
      },
      {
        name: 'Feu',
        multiplier: 2,
      },
      {
        name: 'Eau',
        multiplier: 0.5,
      },
      {
        name: 'Électrik',
        multiplier: 0.5,
      },
      {
        name: 'Glace',
        multiplier: 2,
      },
      {
        name: 'Combat',
        multiplier: 0.5,
      },
      {
        name: 'Poison',
        multiplier: 1,
      },
      {
        name: 'Sol',
        multiplier: 1,
      },
      {
        name: 'Vol',
        multiplier: 2,
      },
      {
        name: 'Psy',
        multiplier: 2,
      },
      {
        name: 'Insecte',
        multiplier: 1,
      },
      {
        name: 'Roche',
        multiplier: 1,
      },
      {
        name: 'Spectre',
        multiplier: 1,
      },
      {
        name: 'Dragon',
        multiplier: 1,
      },
      {
        name: 'Ténèbres',
        multiplier: 1,
      },
      {
        name: 'Acier',
        multiplier: 1,
      },
      {
        name: 'Fée',
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 1,
          name: 'Bulbizarre',
          condition: 'Niveau 16',
        },
      ],
      next: [
        {
          pokedex_id: 3,
          name: 'Florizarre',
          condition: 'Niveau 32',
        },
      ],
      mega: null,
    },
    height: '1,0 m',
    weight: '13,0 kg',
    egg_groups: ['Monstrueux', 'Végétal'],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 3,
    generation: 1,
    category: 'Pokémon Graine',
    name: {
      fr: 'Florizarre',
      en: 'Venusaur',
      jp: 'フシギバナ',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/3/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/3/shiny.png',
      gmax: {
        regular:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/3/gmax-regular.png',
        shiny:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/3/gmax-shiny.png',
      },
    },
    types: [
      {
        name: 'Plante',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png',
      },
      {
        name: 'Poison',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png',
      },
    ],
    talents: [
      {
        name: 'Engrais',
        tc: false,
      },
      {
        name: 'Chlorophylle',
        tc: true,
      },
    ],
    stats: {
      hp: 80,
      atk: 82,
      def: 83,
      spe_atk: 100,
      spe_def: 100,
      vit: 80,
    },
    resistances: [
      {
        name: 'Normal',
        multiplier: 1,
      },
      {
        name: 'Plante',
        multiplier: 0.25,
      },
      {
        name: 'Feu',
        multiplier: 2,
      },
      {
        name: 'Eau',
        multiplier: 0.5,
      },
      {
        name: 'Électrik',
        multiplier: 0.5,
      },
      {
        name: 'Glace',
        multiplier: 2,
      },
      {
        name: 'Combat',
        multiplier: 0.5,
      },
      {
        name: 'Poison',
        multiplier: 1,
      },
      {
        name: 'Sol',
        multiplier: 1,
      },
      {
        name: 'Vol',
        multiplier: 2,
      },
      {
        name: 'Psy',
        multiplier: 2,
      },
      {
        name: 'Insecte',
        multiplier: 1,
      },
      {
        name: 'Roche',
        multiplier: 1,
      },
      {
        name: 'Spectre',
        multiplier: 1,
      },
      {
        name: 'Dragon',
        multiplier: 1,
      },
      {
        name: 'Ténèbres',
        multiplier: 1,
      },
      {
        name: 'Acier',
        multiplier: 1,
      },
      {
        name: 'Fée',
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 1,
          name: 'Bulbizarre',
          condition: 'Niveau 16',
        },
        {
          pokedex_id: 2,
          name: 'Herbizarre',
          condition: 'Niveau 32',
        },
      ],
      next: null,
      mega: [
        {
          orbe: 'Florizarrite',
          sprites: {
            regular:
              'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/3/mega-regular.png',
            shiny:
              'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/3/mega-shiny.png',
          },
        },
      ],
    },
    height: '2,0 m',
    weight: '100,0 kg',
    egg_groups: ['Monstrueux', 'Végétal'],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 4,
    generation: 1,
    category: 'Pokémon Lézard',
    name: {
      fr: 'Salamèche',
      en: 'Charmander',
      jp: 'ヒトカゲ ',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/4/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/4/shiny.png',
      gmax: null,
    },
    types: [
      {
        name: 'Feu',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png',
      },
    ],
    talents: [
      {
        name: 'Brasier',
        tc: false,
      },
      {
        name: 'Force Soleil',
        tc: true,
      },
    ],
    stats: {
      hp: 39,
      atk: 52,
      def: 43,
      spe_atk: 60,
      spe_def: 50,
      vit: 65,
    },
    resistances: [
      {
        name: 'Normal',
        multiplier: 1,
      },
      {
        name: 'Plante',
        multiplier: 0.5,
      },
      {
        name: 'Feu',
        multiplier: 0.5,
      },
      {
        name: 'Eau',
        multiplier: 2,
      },
      {
        name: 'Électrik',
        multiplier: 1,
      },
      {
        name: 'Glace',
        multiplier: 0.5,
      },
      {
        name: 'Combat',
        multiplier: 1,
      },
      {
        name: 'Poison',
        multiplier: 1,
      },
      {
        name: 'Sol',
        multiplier: 2,
      },
      {
        name: 'Vol',
        multiplier: 1,
      },
      {
        name: 'Psy',
        multiplier: 1,
      },
      {
        name: 'Insecte',
        multiplier: 0.5,
      },
      {
        name: 'Roche',
        multiplier: 2,
      },
      {
        name: 'Spectre',
        multiplier: 1,
      },
      {
        name: 'Dragon',
        multiplier: 1,
      },
      {
        name: 'Ténèbres',
        multiplier: 1,
      },
      {
        name: 'Acier',
        multiplier: 0.5,
      },
      {
        name: 'Fée',
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 5,
          name: 'Reptincel',
          condition: 'Niveau 16',
        },
        {
          pokedex_id: 6,
          name: 'Dracaufeu',
          condition: 'Niveau 36',
        },
      ],
      mega: null,
    },
    height: '0,6 m',
    weight: '8,5 kg',
    egg_groups: ['Draconique', 'Monstrueux'],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 5,
    generation: 1,
    category: 'Pokémon Flamme',
    name: {
      fr: 'Reptincel',
      en: 'Charmeleon',
      jp: 'リザード',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/5/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/5/shiny.png',
      gmax: null,
    },
    types: [
      {
        name: 'Feu',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png',
      },
    ],
    talents: [
      {
        name: 'Brasier',
        tc: false,
      },
      {
        name: 'Force Soleil',
        tc: true,
      },
    ],
    stats: {
      hp: 58,
      atk: 64,
      def: 58,
      spe_atk: 80,
      spe_def: 65,
      vit: 80,
    },
    resistances: [
      {
        name: 'Normal',
        multiplier: 1,
      },
      {
        name: 'Plante',
        multiplier: 0.5,
      },
      {
        name: 'Feu',
        multiplier: 0.5,
      },
      {
        name: 'Eau',
        multiplier: 2,
      },
      {
        name: 'Électrik',
        multiplier: 1,
      },
      {
        name: 'Glace',
        multiplier: 0.5,
      },
      {
        name: 'Combat',
        multiplier: 1,
      },
      {
        name: 'Poison',
        multiplier: 1,
      },
      {
        name: 'Sol',
        multiplier: 2,
      },
      {
        name: 'Vol',
        multiplier: 1,
      },
      {
        name: 'Psy',
        multiplier: 1,
      },
      {
        name: 'Insecte',
        multiplier: 0.5,
      },
      {
        name: 'Roche',
        multiplier: 2,
      },
      {
        name: 'Spectre',
        multiplier: 1,
      },
      {
        name: 'Dragon',
        multiplier: 1,
      },
      {
        name: 'Ténèbres',
        multiplier: 1,
      },
      {
        name: 'Acier',
        multiplier: 0.5,
      },
      {
        name: 'Fée',
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 4,
          name: 'Salamèche',
          condition: 'Niveau 16',
        },
      ],
      next: [
        {
          pokedex_id: 6,
          name: 'Dracaufeu',
          condition: 'Niveau 36',
        },
      ],
      mega: null,
    },
    height: '1,1 m',
    weight: '19,0 kg',
    egg_groups: ['Monstrueux', 'Draconique'],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 6,
    generation: 1,
    category: 'Pokémon Flamme',
    name: {
      fr: 'Dracaufeu',
      en: 'Charizard',
      jp: 'リザードン',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/6/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/6/shiny.png',
      gmax: {
        regular:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/6/gmax-regular.png',
        shiny:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/6/gmax-shiny.png',
      },
    },
    types: [
      {
        name: 'Feu',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png',
      },
      {
        name: 'Vol',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png',
      },
    ],
    talents: [
      {
        name: 'Brasier',
        tc: false,
      },
      {
        name: 'Force Soleil',
        tc: true,
      },
    ],
    stats: {
      hp: 78,
      atk: 84,
      def: 78,
      spe_atk: 109,
      spe_def: 85,
      vit: 100,
    },
    resistances: [
      {
        name: 'Normal',
        multiplier: 1,
      },
      {
        name: 'Plante',
        multiplier: 0.25,
      },
      {
        name: 'Feu',
        multiplier: 0.5,
      },
      {
        name: 'Eau',
        multiplier: 2,
      },
      {
        name: 'Électrik',
        multiplier: 2,
      },
      {
        name: 'Glace',
        multiplier: 1,
      },
      {
        name: 'Combat',
        multiplier: 0.5,
      },
      {
        name: 'Poison',
        multiplier: 1,
      },
      {
        name: 'Sol',
        multiplier: 0,
      },
      {
        name: 'Vol',
        multiplier: 1,
      },
      {
        name: 'Psy',
        multiplier: 1,
      },
      {
        name: 'Insecte',
        multiplier: 0.25,
      },
      {
        name: 'Roche',
        multiplier: 4,
      },
      {
        name: 'Spectre',
        multiplier: 1,
      },
      {
        name: 'Dragon',
        multiplier: 1,
      },
      {
        name: 'Ténèbres',
        multiplier: 1,
      },
      {
        name: 'Acier',
        multiplier: 0.5,
      },
      {
        name: 'Fée',
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 4,
          name: 'Salamèche',
          condition: 'Niveau 16',
        },
        {
          pokedex_id: 5,
          name: 'Reptincel',
          condition: 'Niveau 36',
        },
      ],
      next: null,
      mega: [
        {
          orbe: 'Dracaufite X',
          sprites: {
            regular:
              'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/6/mega_x-regular.png',
            shiny:
              'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/6/mega_x-shiny.png',
          },
        },
        {
          orbe: 'Dracaufite Y',
          sprites: {
            regular:
              'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/6/mega_y-regular.png',
            shiny:
              'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/6/mega_y-shiny.png',
          },
        },
      ],
    },
    height: '1,7 m',
    weight: '90,5 kg',
    egg_groups: ['Draconique', 'Monstrueux'],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 7,
    generation: 1,
    category: 'Pokémon Minitortue',
    name: {
      fr: 'Carapuce',
      en: 'Squirtle',
      jp: 'ゼニガメ',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/7/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/7/shiny.png',
      gmax: null,
    },
    types: [
      {
        name: 'Eau',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png',
      },
    ],
    talents: [
      {
        name: 'Torrent',
        tc: false,
      },
      {
        name: 'Cuvette',
        tc: true,
      },
    ],
    stats: {
      hp: 44,
      atk: 48,
      def: 65,
      spe_atk: 50,
      spe_def: 64,
      vit: 43,
    },
    resistances: [
      {
        name: 'Normal',
        multiplier: 1,
      },
      {
        name: 'Plante',
        multiplier: 2,
      },
      {
        name: 'Feu',
        multiplier: 0.5,
      },
      {
        name: 'Eau',
        multiplier: 0.5,
      },
      {
        name: 'Électrik',
        multiplier: 2,
      },
      {
        name: 'Glace',
        multiplier: 0.5,
      },
      {
        name: 'Combat',
        multiplier: 1,
      },
      {
        name: 'Poison',
        multiplier: 1,
      },
      {
        name: 'Sol',
        multiplier: 1,
      },
      {
        name: 'Vol',
        multiplier: 1,
      },
      {
        name: 'Psy',
        multiplier: 1,
      },
      {
        name: 'Insecte',
        multiplier: 1,
      },
      {
        name: 'Roche',
        multiplier: 1,
      },
      {
        name: 'Spectre',
        multiplier: 1,
      },
      {
        name: 'Dragon',
        multiplier: 1,
      },
      {
        name: 'Ténèbres',
        multiplier: 1,
      },
      {
        name: 'Acier',
        multiplier: 0.5,
      },
      {
        name: 'Fée',
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 8,
          name: 'Carabaffe',
          condition: 'Niveau 16',
        },
        {
          pokedex_id: 9,
          name: 'Tortank',
          condition: 'Niveau 36',
        },
      ],
      mega: null,
    },
    height: '0,5 m',
    weight: '9,0 kg',
    egg_groups: ['Aquatique 1', 'Monstrueux'],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 8,
    generation: 1,
    category: 'Pokémon Tortue',
    name: {
      fr: 'Carabaffe',
      en: 'Wartortle',
      jp: 'カメール',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/8/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/8/shiny.png',
      gmax: null,
    },
    types: [
      {
        name: 'Eau',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png',
      },
    ],
    talents: [
      {
        name: 'Torrent',
        tc: false,
      },
      {
        name: 'Cuvette',
        tc: true,
      },
    ],
    stats: {
      hp: 59,
      atk: 63,
      def: 80,
      spe_atk: 65,
      spe_def: 80,
      vit: 58,
    },
    resistances: [
      {
        name: 'Normal',
        multiplier: 1,
      },
      {
        name: 'Plante',
        multiplier: 2,
      },
      {
        name: 'Feu',
        multiplier: 0.5,
      },
      {
        name: 'Eau',
        multiplier: 0.5,
      },
      {
        name: 'Électrik',
        multiplier: 2,
      },
      {
        name: 'Glace',
        multiplier: 0.5,
      },
      {
        name: 'Combat',
        multiplier: 1,
      },
      {
        name: 'Poison',
        multiplier: 1,
      },
      {
        name: 'Sol',
        multiplier: 1,
      },
      {
        name: 'Vol',
        multiplier: 1,
      },
      {
        name: 'Psy',
        multiplier: 1,
      },
      {
        name: 'Insecte',
        multiplier: 1,
      },
      {
        name: 'Roche',
        multiplier: 1,
      },
      {
        name: 'Spectre',
        multiplier: 1,
      },
      {
        name: 'Dragon',
        multiplier: 1,
      },
      {
        name: 'Ténèbres',
        multiplier: 1,
      },
      {
        name: 'Acier',
        multiplier: 0.5,
      },
      {
        name: 'Fée',
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 7,
          name: 'Carapuce',
          condition: 'Niveau 16',
        },
      ],
      next: [
        {
          pokedex_id: 9,
          name: 'Tortank',
          condition: 'Niveau 36',
        },
      ],
      mega: null,
    },
    height: '1,0 m',
    weight: '22,5 kg',
    egg_groups: ['Aquatique 1', 'Monstrueux'],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 9,
    generation: 1,
    category: 'Pokémon Carapace',
    name: {
      fr: 'Tortank',
      en: 'Blastoise',
      jp: 'カメックス',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/9/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/9/shiny.png',
      gmax: {
        regular:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/9/gmax-regular.png',
        shiny:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/9/gmax-shiny.png',
      },
    },
    types: [
      {
        name: 'Eau',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png',
      },
    ],
    talents: [
      {
        name: 'Torrent',
        tc: false,
      },
      {
        name: 'Cuvette',
        tc: true,
      },
    ],
    stats: {
      hp: 79,
      atk: 83,
      def: 100,
      spe_atk: 85,
      spe_def: 105,
      vit: 78,
    },
    resistances: [
      {
        name: 'Normal',
        multiplier: 1,
      },
      {
        name: 'Plante',
        multiplier: 2,
      },
      {
        name: 'Feu',
        multiplier: 0.5,
      },
      {
        name: 'Eau',
        multiplier: 0.5,
      },
      {
        name: 'Électrik',
        multiplier: 2,
      },
      {
        name: 'Glace',
        multiplier: 0.5,
      },
      {
        name: 'Combat',
        multiplier: 1,
      },
      {
        name: 'Poison',
        multiplier: 1,
      },
      {
        name: 'Sol',
        multiplier: 1,
      },
      {
        name: 'Vol',
        multiplier: 1,
      },
      {
        name: 'Psy',
        multiplier: 1,
      },
      {
        name: 'Insecte',
        multiplier: 1,
      },
      {
        name: 'Roche',
        multiplier: 1,
      },
      {
        name: 'Spectre',
        multiplier: 1,
      },
      {
        name: 'Dragon',
        multiplier: 1,
      },
      {
        name: 'Ténèbres',
        multiplier: 1,
      },
      {
        name: 'Acier',
        multiplier: 0.5,
      },
      {
        name: 'Fée',
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 7,
          name: 'Carapuce',
          condition: 'Niveau 16',
        },
        {
          pokedex_id: 8,
          name: 'Carabaffe',
          condition: 'Niveau 36',
        },
      ],
      next: null,
      mega: [
        {
          orbe: 'Tortankite',
          sprites: {
            regular:
              'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/9/mega-regular.png',
            shiny:
              'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/9/mega-shiny.png',
          },
        },
      ],
    },
    height: '1,6 m',
    weight: '85,5 kg',
    egg_groups: ['Aquatique 1', 'Monstrueux'],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  {
    pokedex_id: 10,
    generation: 1,
    category: 'Pokémon Ver',
    name: {
      fr: 'Chenipan',
      en: 'Caterpie',
      jp: 'キャタピー',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/10/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/10/shiny.png',
      gmax: null,
    },
    types: [
      {
        name: 'Insecte',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png',
      },
    ],
    talents: [
      {
        name: 'Écran Poudre',
        tc: false,
      },
      {
        name: 'Fuite',
        tc: true,
      },
    ],
    stats: {
      hp: 45,
      atk: 30,
      def: 35,
      spe_atk: 20,
      spe_def: 20,
      vit: 45,
    },
    resistances: [
      {
        name: 'Normal',
        multiplier: 1,
      },
      {
        name: 'Plante',
        multiplier: 0.5,
      },
      {
        name: 'Feu',
        multiplier: 2,
      },
      {
        name: 'Eau',
        multiplier: 1,
      },
      {
        name: 'Électrik',
        multiplier: 1,
      },
      {
        name: 'Glace',
        multiplier: 1,
      },
      {
        name: 'Combat',
        multiplier: 0.5,
      },
      {
        name: 'Poison',
        multiplier: 1,
      },
      {
        name: 'Sol',
        multiplier: 0.5,
      },
      {
        name: 'Vol',
        multiplier: 2,
      },
      {
        name: 'Psy',
        multiplier: 1,
      },
      {
        name: 'Insecte',
        multiplier: 1,
      },
      {
        name: 'Roche',
        multiplier: 2,
      },
      {
        name: 'Spectre',
        multiplier: 1,
      },
      {
        name: 'Dragon',
        multiplier: 1,
      },
      {
        name: 'Ténèbres',
        multiplier: 1,
      },
      {
        name: 'Acier',
        multiplier: 1,
      },
      {
        name: 'Fée',
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 11,
          name: 'Chrysacier',
          condition: 'Niveau 7',
        },
        {
          pokedex_id: 12,
          name: 'Papilusion',
          condition: 'Niveau 10',
        },
      ],
      mega: null,
    },
    height: '0,3 m',
    weight: '2,9 kg',
    egg_groups: ['Insectoïde'],
    sexe: {
      male: 50.0,
      female: 50.0,
    },
    catch_rate: 255,
    level_100: 1000000,
    formes: null,
  },
];

export const mockGetPokemonById: Record<string, PokemonCardProps> = {
  '1': {
    pokedex_id: 1,
    generation: 1,
    category: 'Pokémon Graine',
    name: {
      fr: 'Bulbizarre',
      en: 'Bulbasaur',
      jp: 'フシギダネ',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/1/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/1/shiny.png',
      gmax: null,
    },
    types: [
      {
        name: 'Plante',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png',
      },
      {
        name: 'Poison',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png',
      },
    ],
    talents: [
      {
        name: 'Engrais',
        tc: false,
      },
      {
        name: 'Chlorophylle',
        tc: true,
      },
    ],
    stats: {
      hp: 45,
      atk: 49,
      def: 49,
      spe_atk: 65,
      spe_def: 65,
      vit: 45,
    },
    resistances: [
      {
        name: 'Normal',
        multiplier: 1,
      },
      {
        name: 'Plante',
        multiplier: 0.25,
      },
      {
        name: 'Feu',
        multiplier: 2,
      },
      {
        name: 'Eau',
        multiplier: 0.5,
      },
      {
        name: 'Électrik',
        multiplier: 0.5,
      },
      {
        name: 'Glace',
        multiplier: 2,
      },
      {
        name: 'Combat',
        multiplier: 0.5,
      },
      {
        name: 'Poison',
        multiplier: 1,
      },
      {
        name: 'Sol',
        multiplier: 1,
      },
      {
        name: 'Vol',
        multiplier: 2,
      },
      {
        name: 'Psy',
        multiplier: 2,
      },
      {
        name: 'Insecte',
        multiplier: 1,
      },
      {
        name: 'Roche',
        multiplier: 1,
      },
      {
        name: 'Spectre',
        multiplier: 1,
      },
      {
        name: 'Dragon',
        multiplier: 1,
      },
      {
        name: 'Ténèbres',
        multiplier: 1,
      },
      {
        name: 'Acier',
        multiplier: 1,
      },
      {
        name: 'Fée',
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 2,
          name: 'Herbizarre',
          condition: 'Niveau 16',
        },
        {
          pokedex_id: 3,
          name: 'Florizarre',
          condition: 'Niveau 32',
        },
      ],
      mega: null,
    },
    height: '0,7 m',
    weight: '6,9 kg',
    egg_groups: ['Monstrueux', 'Végétal'],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  '2': {
    pokedex_id: 2,
    generation: 1,
    category: 'Pokémon Graine',
    name: {
      fr: 'Herbizarre',
      en: 'Ivysaur',
      jp: 'フシギソウ',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/2/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/2/shiny.png',
      gmax: null,
    },
    types: [
      {
        name: 'Plante',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png',
      },
      {
        name: 'Poison',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png',
      },
    ],
    talents: [
      {
        name: 'Engrais',
        tc: false,
      },
      {
        name: 'Chlorophylle',
        tc: true,
      },
    ],
    stats: {
      hp: 60,
      atk: 62,
      def: 63,
      spe_atk: 80,
      spe_def: 80,
      vit: 60,
    },
    resistances: [
      {
        name: 'Normal',
        multiplier: 1,
      },
      {
        name: 'Plante',
        multiplier: 0.25,
      },
      {
        name: 'Feu',
        multiplier: 2,
      },
      {
        name: 'Eau',
        multiplier: 0.5,
      },
      {
        name: 'Électrik',
        multiplier: 0.5,
      },
      {
        name: 'Glace',
        multiplier: 2,
      },
      {
        name: 'Combat',
        multiplier: 0.5,
      },
      {
        name: 'Poison',
        multiplier: 1,
      },
      {
        name: 'Sol',
        multiplier: 1,
      },
      {
        name: 'Vol',
        multiplier: 2,
      },
      {
        name: 'Psy',
        multiplier: 2,
      },
      {
        name: 'Insecte',
        multiplier: 1,
      },
      {
        name: 'Roche',
        multiplier: 1,
      },
      {
        name: 'Spectre',
        multiplier: 1,
      },
      {
        name: 'Dragon',
        multiplier: 1,
      },
      {
        name: 'Ténèbres',
        multiplier: 1,
      },
      {
        name: 'Acier',
        multiplier: 1,
      },
      {
        name: 'Fée',
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 1,
          name: 'Bulbizarre',
          condition: 'Niveau 16',
        },
      ],
      next: [
        {
          pokedex_id: 3,
          name: 'Florizarre',
          condition: 'Niveau 32',
        },
      ],
      mega: null,
    },
    height: '1,0 m',
    weight: '13,0 kg',
    egg_groups: ['Monstrueux', 'Végétal'],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  '3': {
    pokedex_id: 3,
    generation: 1,
    category: 'Pokémon Graine',
    name: {
      fr: 'Florizarre',
      en: 'Venusaur',
      jp: 'フシギバナ',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/3/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/3/shiny.png',
      gmax: {
        regular:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/3/gmax-regular.png',
        shiny:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/3/gmax-shiny.png',
      },
    },
    types: [
      {
        name: 'Plante',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/plante.png',
      },
      {
        name: 'Poison',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/poison.png',
      },
    ],
    talents: [
      {
        name: 'Engrais',
        tc: false,
      },
      {
        name: 'Chlorophylle',
        tc: true,
      },
    ],
    stats: {
      hp: 80,
      atk: 82,
      def: 83,
      spe_atk: 100,
      spe_def: 100,
      vit: 80,
    },
    resistances: [
      {
        name: 'Normal',
        multiplier: 1,
      },
      {
        name: 'Plante',
        multiplier: 0.25,
      },
      {
        name: 'Feu',
        multiplier: 2,
      },
      {
        name: 'Eau',
        multiplier: 0.5,
      },
      {
        name: 'Électrik',
        multiplier: 0.5,
      },
      {
        name: 'Glace',
        multiplier: 2,
      },
      {
        name: 'Combat',
        multiplier: 0.5,
      },
      {
        name: 'Poison',
        multiplier: 1,
      },
      {
        name: 'Sol',
        multiplier: 1,
      },
      {
        name: 'Vol',
        multiplier: 2,
      },
      {
        name: 'Psy',
        multiplier: 2,
      },
      {
        name: 'Insecte',
        multiplier: 1,
      },
      {
        name: 'Roche',
        multiplier: 1,
      },
      {
        name: 'Spectre',
        multiplier: 1,
      },
      {
        name: 'Dragon',
        multiplier: 1,
      },
      {
        name: 'Ténèbres',
        multiplier: 1,
      },
      {
        name: 'Acier',
        multiplier: 1,
      },
      {
        name: 'Fée',
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 1,
          name: 'Bulbizarre',
          condition: 'Niveau 16',
        },
        {
          pokedex_id: 2,
          name: 'Herbizarre',
          condition: 'Niveau 32',
        },
      ],
      next: null,
      mega: [
        {
          orbe: 'Florizarrite',
          sprites: {
            regular:
              'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/3/mega-regular.png',
            shiny:
              'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/3/mega-shiny.png',
          },
        },
      ],
    },
    height: '2,0 m',
    weight: '100,0 kg',
    egg_groups: ['Monstrueux', 'Végétal'],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  '4': {
    pokedex_id: 4,
    generation: 1,
    category: 'Pokémon Lézard',
    name: {
      fr: 'Salamèche',
      en: 'Charmander',
      jp: 'ヒトカゲ ',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/4/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/4/shiny.png',
      gmax: null,
    },
    types: [
      {
        name: 'Feu',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png',
      },
    ],
    talents: [
      {
        name: 'Brasier',
        tc: false,
      },
      {
        name: 'Force Soleil',
        tc: true,
      },
    ],
    stats: {
      hp: 39,
      atk: 52,
      def: 43,
      spe_atk: 60,
      spe_def: 50,
      vit: 65,
    },
    resistances: [
      {
        name: 'Normal',
        multiplier: 1,
      },
      {
        name: 'Plante',
        multiplier: 0.5,
      },
      {
        name: 'Feu',
        multiplier: 0.5,
      },
      {
        name: 'Eau',
        multiplier: 2,
      },
      {
        name: 'Électrik',
        multiplier: 1,
      },
      {
        name: 'Glace',
        multiplier: 0.5,
      },
      {
        name: 'Combat',
        multiplier: 1,
      },
      {
        name: 'Poison',
        multiplier: 1,
      },
      {
        name: 'Sol',
        multiplier: 2,
      },
      {
        name: 'Vol',
        multiplier: 1,
      },
      {
        name: 'Psy',
        multiplier: 1,
      },
      {
        name: 'Insecte',
        multiplier: 0.5,
      },
      {
        name: 'Roche',
        multiplier: 2,
      },
      {
        name: 'Spectre',
        multiplier: 1,
      },
      {
        name: 'Dragon',
        multiplier: 1,
      },
      {
        name: 'Ténèbres',
        multiplier: 1,
      },
      {
        name: 'Acier',
        multiplier: 0.5,
      },
      {
        name: 'Fée',
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 5,
          name: 'Reptincel',
          condition: 'Niveau 16',
        },
        {
          pokedex_id: 6,
          name: 'Dracaufeu',
          condition: 'Niveau 36',
        },
      ],
      mega: null,
    },
    height: '0,6 m',
    weight: '8,5 kg',
    egg_groups: ['Draconique', 'Monstrueux'],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  '5': {
    pokedex_id: 5,
    generation: 1,
    category: 'Pokémon Flamme',
    name: {
      fr: 'Reptincel',
      en: 'Charmeleon',
      jp: 'リザード',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/5/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/5/shiny.png',
      gmax: null,
    },
    types: [
      {
        name: 'Feu',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png',
      },
    ],
    talents: [
      {
        name: 'Brasier',
        tc: false,
      },
      {
        name: 'Force Soleil',
        tc: true,
      },
    ],
    stats: {
      hp: 58,
      atk: 64,
      def: 58,
      spe_atk: 80,
      spe_def: 65,
      vit: 80,
    },
    resistances: [
      {
        name: 'Normal',
        multiplier: 1,
      },
      {
        name: 'Plante',
        multiplier: 0.5,
      },
      {
        name: 'Feu',
        multiplier: 0.5,
      },
      {
        name: 'Eau',
        multiplier: 2,
      },
      {
        name: 'Électrik',
        multiplier: 1,
      },
      {
        name: 'Glace',
        multiplier: 0.5,
      },
      {
        name: 'Combat',
        multiplier: 1,
      },
      {
        name: 'Poison',
        multiplier: 1,
      },
      {
        name: 'Sol',
        multiplier: 2,
      },
      {
        name: 'Vol',
        multiplier: 1,
      },
      {
        name: 'Psy',
        multiplier: 1,
      },
      {
        name: 'Insecte',
        multiplier: 0.5,
      },
      {
        name: 'Roche',
        multiplier: 2,
      },
      {
        name: 'Spectre',
        multiplier: 1,
      },
      {
        name: 'Dragon',
        multiplier: 1,
      },
      {
        name: 'Ténèbres',
        multiplier: 1,
      },
      {
        name: 'Acier',
        multiplier: 0.5,
      },
      {
        name: 'Fée',
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 4,
          name: 'Salamèche',
          condition: 'Niveau 16',
        },
      ],
      next: [
        {
          pokedex_id: 6,
          name: 'Dracaufeu',
          condition: 'Niveau 36',
        },
      ],
      mega: null,
    },
    height: '1,1 m',
    weight: '19,0 kg',
    egg_groups: ['Monstrueux', 'Draconique'],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  '6': {
    pokedex_id: 6,
    generation: 1,
    category: 'Pokémon Flamme',
    name: {
      fr: 'Dracaufeu',
      en: 'Charizard',
      jp: 'リザードン',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/6/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/6/shiny.png',
      gmax: {
        regular:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/6/gmax-regular.png',
        shiny:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/6/gmax-shiny.png',
      },
    },
    types: [
      {
        name: 'Feu',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/feu.png',
      },
      {
        name: 'Vol',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/vol.png',
      },
    ],
    talents: [
      {
        name: 'Brasier',
        tc: false,
      },
      {
        name: 'Force Soleil',
        tc: true,
      },
    ],
    stats: {
      hp: 78,
      atk: 84,
      def: 78,
      spe_atk: 109,
      spe_def: 85,
      vit: 100,
    },
    resistances: [
      {
        name: 'Normal',
        multiplier: 1,
      },
      {
        name: 'Plante',
        multiplier: 0.25,
      },
      {
        name: 'Feu',
        multiplier: 0.5,
      },
      {
        name: 'Eau',
        multiplier: 2,
      },
      {
        name: 'Électrik',
        multiplier: 2,
      },
      {
        name: 'Glace',
        multiplier: 1,
      },
      {
        name: 'Combat',
        multiplier: 0.5,
      },
      {
        name: 'Poison',
        multiplier: 1,
      },
      {
        name: 'Sol',
        multiplier: 0,
      },
      {
        name: 'Vol',
        multiplier: 1,
      },
      {
        name: 'Psy',
        multiplier: 1,
      },
      {
        name: 'Insecte',
        multiplier: 0.25,
      },
      {
        name: 'Roche',
        multiplier: 4,
      },
      {
        name: 'Spectre',
        multiplier: 1,
      },
      {
        name: 'Dragon',
        multiplier: 1,
      },
      {
        name: 'Ténèbres',
        multiplier: 1,
      },
      {
        name: 'Acier',
        multiplier: 0.5,
      },
      {
        name: 'Fée',
        multiplier: 0.5,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 4,
          name: 'Salamèche',
          condition: 'Niveau 16',
        },
        {
          pokedex_id: 5,
          name: 'Reptincel',
          condition: 'Niveau 36',
        },
      ],
      next: null,
      mega: [
        {
          orbe: 'Dracaufite X',
          sprites: {
            regular:
              'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/6/mega_x-regular.png',
            shiny:
              'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/6/mega_x-shiny.png',
          },
        },
        {
          orbe: 'Dracaufite Y',
          sprites: {
            regular:
              'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/6/mega_y-regular.png',
            shiny:
              'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/6/mega_y-shiny.png',
          },
        },
      ],
    },
    height: '1,7 m',
    weight: '90,5 kg',
    egg_groups: ['Draconique', 'Monstrueux'],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  '7': {
    pokedex_id: 7,
    generation: 1,
    category: 'Pokémon Minitortue',
    name: {
      fr: 'Carapuce',
      en: 'Squirtle',
      jp: 'ゼニガメ',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/7/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/7/shiny.png',
      gmax: null,
    },
    types: [
      {
        name: 'Eau',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png',
      },
    ],
    talents: [
      {
        name: 'Torrent',
        tc: false,
      },
      {
        name: 'Cuvette',
        tc: true,
      },
    ],
    stats: {
      hp: 44,
      atk: 48,
      def: 65,
      spe_atk: 50,
      spe_def: 64,
      vit: 43,
    },
    resistances: [
      {
        name: 'Normal',
        multiplier: 1,
      },
      {
        name: 'Plante',
        multiplier: 2,
      },
      {
        name: 'Feu',
        multiplier: 0.5,
      },
      {
        name: 'Eau',
        multiplier: 0.5,
      },
      {
        name: 'Électrik',
        multiplier: 2,
      },
      {
        name: 'Glace',
        multiplier: 0.5,
      },
      {
        name: 'Combat',
        multiplier: 1,
      },
      {
        name: 'Poison',
        multiplier: 1,
      },
      {
        name: 'Sol',
        multiplier: 1,
      },
      {
        name: 'Vol',
        multiplier: 1,
      },
      {
        name: 'Psy',
        multiplier: 1,
      },
      {
        name: 'Insecte',
        multiplier: 1,
      },
      {
        name: 'Roche',
        multiplier: 1,
      },
      {
        name: 'Spectre',
        multiplier: 1,
      },
      {
        name: 'Dragon',
        multiplier: 1,
      },
      {
        name: 'Ténèbres',
        multiplier: 1,
      },
      {
        name: 'Acier',
        multiplier: 0.5,
      },
      {
        name: 'Fée',
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 8,
          name: 'Carabaffe',
          condition: 'Niveau 16',
        },
        {
          pokedex_id: 9,
          name: 'Tortank',
          condition: 'Niveau 36',
        },
      ],
      mega: null,
    },
    height: '0,5 m',
    weight: '9,0 kg',
    egg_groups: ['Aquatique 1', 'Monstrueux'],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  '8': {
    pokedex_id: 8,
    generation: 1,
    category: 'Pokémon Tortue',
    name: {
      fr: 'Carabaffe',
      en: 'Wartortle',
      jp: 'カメール',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/8/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/8/shiny.png',
      gmax: null,
    },
    types: [
      {
        name: 'Eau',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png',
      },
    ],
    talents: [
      {
        name: 'Torrent',
        tc: false,
      },
      {
        name: 'Cuvette',
        tc: true,
      },
    ],
    stats: {
      hp: 59,
      atk: 63,
      def: 80,
      spe_atk: 65,
      spe_def: 80,
      vit: 58,
    },
    resistances: [
      {
        name: 'Normal',
        multiplier: 1,
      },
      {
        name: 'Plante',
        multiplier: 2,
      },
      {
        name: 'Feu',
        multiplier: 0.5,
      },
      {
        name: 'Eau',
        multiplier: 0.5,
      },
      {
        name: 'Électrik',
        multiplier: 2,
      },
      {
        name: 'Glace',
        multiplier: 0.5,
      },
      {
        name: 'Combat',
        multiplier: 1,
      },
      {
        name: 'Poison',
        multiplier: 1,
      },
      {
        name: 'Sol',
        multiplier: 1,
      },
      {
        name: 'Vol',
        multiplier: 1,
      },
      {
        name: 'Psy',
        multiplier: 1,
      },
      {
        name: 'Insecte',
        multiplier: 1,
      },
      {
        name: 'Roche',
        multiplier: 1,
      },
      {
        name: 'Spectre',
        multiplier: 1,
      },
      {
        name: 'Dragon',
        multiplier: 1,
      },
      {
        name: 'Ténèbres',
        multiplier: 1,
      },
      {
        name: 'Acier',
        multiplier: 0.5,
      },
      {
        name: 'Fée',
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 7,
          name: 'Carapuce',
          condition: 'Niveau 16',
        },
      ],
      next: [
        {
          pokedex_id: 9,
          name: 'Tortank',
          condition: 'Niveau 36',
        },
      ],
      mega: null,
    },
    height: '1,0 m',
    weight: '22,5 kg',
    egg_groups: ['Aquatique 1', 'Monstrueux'],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  '9': {
    pokedex_id: 9,
    generation: 1,
    category: 'Pokémon Carapace',
    name: {
      fr: 'Tortank',
      en: 'Blastoise',
      jp: 'カメックス',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/9/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/9/shiny.png',
      gmax: {
        regular:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/9/gmax-regular.png',
        shiny:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/9/gmax-shiny.png',
      },
    },
    types: [
      {
        name: 'Eau',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/eau.png',
      },
    ],
    talents: [
      {
        name: 'Torrent',
        tc: false,
      },
      {
        name: 'Cuvette',
        tc: true,
      },
    ],
    stats: {
      hp: 79,
      atk: 83,
      def: 100,
      spe_atk: 85,
      spe_def: 105,
      vit: 78,
    },
    resistances: [
      {
        name: 'Normal',
        multiplier: 1,
      },
      {
        name: 'Plante',
        multiplier: 2,
      },
      {
        name: 'Feu',
        multiplier: 0.5,
      },
      {
        name: 'Eau',
        multiplier: 0.5,
      },
      {
        name: 'Électrik',
        multiplier: 2,
      },
      {
        name: 'Glace',
        multiplier: 0.5,
      },
      {
        name: 'Combat',
        multiplier: 1,
      },
      {
        name: 'Poison',
        multiplier: 1,
      },
      {
        name: 'Sol',
        multiplier: 1,
      },
      {
        name: 'Vol',
        multiplier: 1,
      },
      {
        name: 'Psy',
        multiplier: 1,
      },
      {
        name: 'Insecte',
        multiplier: 1,
      },
      {
        name: 'Roche',
        multiplier: 1,
      },
      {
        name: 'Spectre',
        multiplier: 1,
      },
      {
        name: 'Dragon',
        multiplier: 1,
      },
      {
        name: 'Ténèbres',
        multiplier: 1,
      },
      {
        name: 'Acier',
        multiplier: 0.5,
      },
      {
        name: 'Fée',
        multiplier: 1,
      },
    ],
    evolution: {
      pre: [
        {
          pokedex_id: 7,
          name: 'Carapuce',
          condition: 'Niveau 16',
        },
        {
          pokedex_id: 8,
          name: 'Carabaffe',
          condition: 'Niveau 36',
        },
      ],
      next: null,
      mega: [
        {
          orbe: 'Tortankite',
          sprites: {
            regular:
              'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/9/mega-regular.png',
            shiny:
              'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/9/mega-shiny.png',
          },
        },
      ],
    },
    height: '1,6 m',
    weight: '85,5 kg',
    egg_groups: ['Aquatique 1', 'Monstrueux'],
    sexe: {
      male: 87.5,
      female: 12.5,
    },
    catch_rate: 45,
    level_100: 1059862,
    formes: null,
  },
  '10': {
    pokedex_id: 10,
    generation: 1,
    category: 'Pokémon Ver',
    name: {
      fr: 'Chenipan',
      en: 'Caterpie',
      jp: 'キャタピー',
    },
    sprites: {
      regular:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/10/regular.png',
      shiny:
        'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/sprites/10/shiny.png',
      gmax: null,
    },
    types: [
      {
        name: 'Insecte',
        image:
          'https://raw.githubusercontent.com/Yarkis01/TyraDex/images/types/insecte.png',
      },
    ],
    talents: [
      {
        name: 'Écran Poudre',
        tc: false,
      },
      {
        name: 'Fuite',
        tc: true,
      },
    ],
    stats: {
      hp: 45,
      atk: 30,
      def: 35,
      spe_atk: 20,
      spe_def: 20,
      vit: 45,
    },
    resistances: [
      {
        name: 'Normal',
        multiplier: 1,
      },
      {
        name: 'Plante',
        multiplier: 0.5,
      },
      {
        name: 'Feu',
        multiplier: 2,
      },
      {
        name: 'Eau',
        multiplier: 1,
      },
      {
        name: 'Électrik',
        multiplier: 1,
      },
      {
        name: 'Glace',
        multiplier: 1,
      },
      {
        name: 'Combat',
        multiplier: 0.5,
      },
      {
        name: 'Poison',
        multiplier: 1,
      },
      {
        name: 'Sol',
        multiplier: 0.5,
      },
      {
        name: 'Vol',
        multiplier: 2,
      },
      {
        name: 'Psy',
        multiplier: 1,
      },
      {
        name: 'Insecte',
        multiplier: 1,
      },
      {
        name: 'Roche',
        multiplier: 2,
      },
      {
        name: 'Spectre',
        multiplier: 1,
      },
      {
        name: 'Dragon',
        multiplier: 1,
      },
      {
        name: 'Ténèbres',
        multiplier: 1,
      },
      {
        name: 'Acier',
        multiplier: 1,
      },
      {
        name: 'Fée',
        multiplier: 1,
      },
    ],
    evolution: {
      pre: null,
      next: [
        {
          pokedex_id: 11,
          name: 'Chrysacier',
          condition: 'Niveau 7',
        },
        {
          pokedex_id: 12,
          name: 'Papilusion',
          condition: 'Niveau 10',
        },
      ],
      mega: null,
    },
    height: '0,3 m',
    weight: '2,9 kg',
    egg_groups: ['Insectoïde'],
    sexe: {
      male: 50.0,
      female: 50.0,
    },
    catch_rate: 255,
    level_100: 1000000,
    formes: null,
  },
};
