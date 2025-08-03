import { atom } from "jotai";

//type Categories = "DOING" | "TO_DO" | "DONE";

//type 보다 더 명확함. defaul value = number index
export enum Categories {
  "TO_DO", //0
  "DOING", //1
  "DONE", //2
  "CHANGE_VALUE" = "NOT_NUMBER",
}

export interface IToDo {
  id: number;
  text: string;
  //string에서 특정 문자열만 가능하도록 제약
  category: Categories;
}

//상태 정의
export const toDoState = atom<IToDo[]>([]);

//상태 정의
export const categoryState = atom<Categories>(Categories.TO_DO);

//atom 데이터 가공 제공방법 ps. Recoil의 selector
export const toDoSelector = atom((get) => {
  //toDoState 주시
  const toDos = get(toDoState);
  const category = get(categoryState);

  //가공한 data 반환
  return toDos.filter((todo) => todo.category === category);
});
