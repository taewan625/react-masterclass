import { atom } from "jotai";

enum TIME {
  HOUR = 60,
}

export const minuteState = atom<number>(11);

export const hourSelect = atom((get) => {
  //주시 대상
  const minutes = get(minuteState);
  //반환 값
  return minutes / TIME.HOUR;
});
