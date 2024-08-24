import { atom } from "recoil";

export const recordState = atom<number | null>({
  key: "recordState",
  default: null,
});
