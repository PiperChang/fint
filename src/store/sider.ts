import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const siderState = atom({
  key: 'isSiderOpen',
  default: true,
  effects_UNSTABLE: [persistAtom],
})