import { loadPostsMD } from '$lib/svxLoader';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
  return { postsMD: loadPostsMD() };
};
