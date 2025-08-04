import { atom } from "jotai";

enum TIME {
  HOUR = 60,
}

export const minuteState = atom<number>(11);

//atom을 여러개 만들지 않고 1개로 구분 작업 처리
export const hourSelect = atom(
  (get) => {
    return get(minuteState) / TIME.HOUR;
  },
  //get:다른 atom 참조 목적, newValue: set으로 받은 값
  (get, set, newValue) => {
    //적용 atom, 적용값
    set(minuteState, Number(newValue) * TIME.HOUR);
  }
);
