import type { PKMN_TYPE, TypesCollection } from './types/core';
import NoneType from './types/None';
import NormalType from './types/Normal';
import FightingType from './types/Fighting';

const Types: TypesCollection = {
  NONE: NoneType,
  NORMAL: NormalType,
  FIGHTING: FightingType,
};

export type TYPES = typeof Types[PKMN_TYPE];

export default Types;
