import type { TypeModel } from '../types.d';
import { defineTypeModel, TYPE_EFFECTNESS } from './core';
import { PKMN_TYPE_INDEX } from './core';

export type Normal = defineTypeModel<
  'NORMAL',
  PKMN_TYPE_INDEX.NORMAL,
  TypeModel
>;

const NormalType: Normal = {
  name: 'normal',
  index: PKMN_TYPE_INDEX.NORMAL,
  color: '#79794E',
  effects: {
    FIGHTING: {
      defensive: TYPE_EFFECTNESS.WEAK,
    },
  },
};

export default NormalType;
