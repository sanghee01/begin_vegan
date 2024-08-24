import { atom } from "recoil";

export const userState = atom<number | null>({
  key: "userState",
  default: null,
});
