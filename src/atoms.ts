import { atom } from "jotai";

export interface IToDo {
  id: number;
  text: string;
  //string에서 특정 문자열만 가능하도록 제약
  category: "TODO" | "ING" | "DONE";
}

//상태 정의
export const toDoState = atom<IToDo[]>([]);
