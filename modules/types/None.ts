import type { TypeModel } from '../types.d';
import type { defineTypeModel } from './core';
import { PKMN_TYPE_INDEX } from './core';

export type None = defineTypeModel<'NONE', PKMN_TYPE_INDEX.NONE, TypeModel>;

const NoneType: None = {
  name: 'none',
  index: PKMN_TYPE_INDEX.NONE,
  color: '#41685D',
  effects: {},
};

export default NoneType;
