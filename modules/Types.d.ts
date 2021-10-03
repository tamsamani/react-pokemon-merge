import { PKMN_TYPE, PKMN_TYPE_INDEX } from './types/index';

export type definePokemonType<
  T extends PKMN_TYPE,
  I extends PKMN_TYPE_INDEX
> = {
  name: Capitalize<Lowercase<T>>;
  index: I;
  color: string;
  weakness?: PKMN_TYPE_INDEX[];
  resistance?: PKMN_TYPE_INDEX[];
  immunity?: PKMN_TYPE_INDEX[];
};

export interface TypeModel {
  name: string;
  index: PKMN_TYPE_INDEX;
  color: string;
  weakness?: PKMN_TYPE_INDEX[];
  resistance?: PKMN_TYPE_INDEX[];
  immunity?: PKMN_TYPE_INDEX[];
}
