import { atom } from "jotai";

export interface IToDo {
  id: number;
  text: string;
  //string에서 특정 문자열만 가능하도록 제약
  category: "DOING" | "TO_DO" | "DONE";
}

//상태 정의
export const toDoState = atom<IToDo[]>([]);

//atom 데이터 가공 제공방법 ps. Recoil의 selector
export const toDoSelector = atom((get) => {
  //toDoState 주시
  const toDos = get(toDoState);

  //가공한 data 반환
  return {
    to_do: toDos.filter((todo) => todo.category === "TO_DO"),
    doing: toDos.filter((todo) => todo.category === "DOING"),
    done: toDos.filter((todo) => todo.category === "DONE"),
  };
});
