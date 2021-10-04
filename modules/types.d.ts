import type { PKMN_TYPE_INDEX, PKMN_TYPE_EFFECT } from './types/core';

export interface TypeModel {
  name: string;
  index: PKMN_TYPE_INDEX;
  color: string;
  effects: PKMN_TYPE_EFFECT;
}
