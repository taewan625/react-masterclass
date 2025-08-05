import { atom } from "jotai";

//해당 type을 지정하지 않을 경우 ts는 toDoState가 오직 3개의 properties만 가진다고 판단
interface IToDoState {
  [key: string]: string[];
}

export const toDoState = atom<IToDoState>({
  to_do: ["a", "b", "c"],
  doing: ["d", "e"],
  done: ["f"],
});
