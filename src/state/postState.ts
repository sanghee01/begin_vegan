import { atom } from "recoil";

export const postState = atom<[] | null>({
  key: "postState",
  default: null,
});

export const postImgState = atom<[] | null>({
  key: "postImgState",
  default: null,
});
