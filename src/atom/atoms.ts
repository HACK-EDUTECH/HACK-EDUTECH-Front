import { atom } from 'recoil';
import data from "../data/data";

export const isWordAtom = atom({
  key: 'isWord',
  default: data,
});

export const chaperAtom = atom({
    key: 'chaper',
    default: data.CHAPTER1.STEP1[0].word_set,
  });

export const step1Atom = atom({
  key: 'step1',
  default: data.CHAPTER1.STEP1[0].word_set,
});

export const step2Atom = atom({
    key: 'step2',
    default: data.CHAPTER1.STEP2[0].word_set,
  });