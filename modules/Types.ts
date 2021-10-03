import type { PKMN_TYPE, TypesCollection } from './Types.d';
import NoneType from './types/None';

const Types: TypesCollection = {
  NONE: NoneType,
  FIGHTING: undefined,
  NORMAL: undefined,
};

export type TYPES = typeof Types[PKMN_TYPE];

export default Types;
