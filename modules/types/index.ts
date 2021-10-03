export enum PKMN_TYPE_INDEX {
  NONE = -1,
  NORMAL,
  FIGHTING,
}

export type PKMN_TYPE = keyof typeof PKMN_TYPE_INDEX;

export type TypesCollection = {
  [P in PKMN_TYPE]: definePokemonType<P, PKMN_TYPE_INDEX>;
};