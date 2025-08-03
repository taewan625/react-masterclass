import { atom } from "jotai";

export interface IToDo {
  id: number;
  text: string;
  //string에서 특정 문자열만 가능하도록 제약
  category: "DOING" | "TO_DO" | "DONE";
}
//interface 타입 재활용 방법 IToDo["category"]

//상태 정의
export const toDoState = atom<IToDo[]>([]);
