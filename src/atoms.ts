import { atom } from "jotai";

export interface ITodo {
  id: number;
  text: string;
}

//해당 type을 지정하지 않을 경우 ts는 toDoState가 오직 3개의 properties만 가진다고 판단
interface IToDoState {
  [key: string]: ITodo[];
}

export const toDoState = atom<IToDoState>({
  todo: [],
  doing: [],
  done: [],
});
