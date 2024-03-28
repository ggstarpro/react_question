import { atom } from 'recoil';

export const savingsState = atom({
  key: 'savingsState', // 一意のID
  default: 0, // 初期値
});

export const goalState = atom({
  key: 'goalState',
  default: 1000,
});
