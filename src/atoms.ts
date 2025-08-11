import { atom } from "jotai";

export enum SessionStorage {
  "TODO_DATA" = "TODO_DATA",
  "CATEGORY_DATA" = "CATEGORY_DATA",
}

export interface ICategories {
  id: number;
  type: string;
}

export interface IToDo {
  id: number;
  text: string;
  category: string;
}

//할일 목록
export const toDoState = atom<IToDo[]>([]);

//카테고리 목록
export const categoryState = atom<ICategories[]>([
  { id: 1, type: "to do" },
  { id: 2, type: "doing" },
  { id: 3, type: "done" },
]);

//선택된 카테고리 (default: "to do")
export const selectedCategoryState = atom<string>("to do");

//selector
export const toDoSelector = atom((get) => {
  const toDos = get(toDoState);
  const selectedCategory = get(selectedCategoryState);

  return toDos.filter((todo) => todo.category === selectedCategory);
});
