import type { definePokemonType } from '../Types.d';
import { PKMN_TYPE_INDEX } from './index';

export type None = definePokemonType<'NONE', PKMN_TYPE_INDEX.NONE>;

const NoneType: None = {
  name: 'None',
  index: PKMN_TYPE_INDEX.NONE,
  color: '#111111',
};

export default NoneType;
