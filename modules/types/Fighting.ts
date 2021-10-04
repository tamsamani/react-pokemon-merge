import type { TypeModel } from '../types.d';
import { defineTypeModel, TYPE_EFFECTNESS } from './core';
import { PKMN_TYPE_INDEX } from './core';

export type Fighting = defineTypeModel<
  'FIGHTING',
  PKMN_TYPE_INDEX.FIGHTING,
  TypeModel
>;

const FightingType: Fighting = {
  name: 'fighting',
  index: PKMN_TYPE_INDEX.FIGHTING,
  color: '#82211B',
  effects: {
    NORMAL: {
      offensive: TYPE_EFFECTNESS.STRONG,
    },
  },
};

export default FightingType;
