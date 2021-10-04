import type { TypeModel } from '../types.d';

/**
 * Please read types ref: https://github.com/Maruno17/pokemon-essentials/blob/master/PBS/Gen%207/types.txt
 *
 *
 */
export enum PKMN_TYPE_INDEX {
  NONE = -1,
  NORMAL,
  FIGHTING,
}

export type PKMN_TYPE = keyof typeof PKMN_TYPE_INDEX;

export type defineTypeModel<
  T extends PKMN_TYPE,
  I extends PKMN_TYPE_INDEX,
  M extends TypeModel
> = M & {
  name: Lowercase<T>;
  index: I;
};

export type TypesCollection = {
  [P in PKMN_TYPE]: defineTypeModel<P, PKMN_TYPE_INDEX, TypeModel>;
};

export enum TYPE_EFFECTNESS {
  IMMUNE = 0,
  WEAK = 1 / 2,
  NORMAL = 1,
  STRONG = 2,
}

/**
 * The type effectness relations
 * Read: https://www.smogon.com/dex/ss/types/fighting/
 */
export type PKMN_TYPE_EFFECT = Partial<{ [P in PKMN_TYPE]: TypeEffectiveness }>;

export type TypeEffectiveness = {
  offensive?: TYPE_EFFECTNESS;
  defensive?: TYPE_EFFECTNESS;
};
