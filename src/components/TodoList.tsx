import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  Categories,
  categoryState,
  IToDo,
  SessionStorage,
  toDoSelector,
  toDoState,
} from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { useEffect } from "react";

function ToDoList() {
  /* jotai atom function 정리
  //초기화
  const atomPkName = atom<interface>(initvalue);
  
  //get & set
  const [value, setFn] = useAtom(atomPkName); 
  
  //get, set 분리
  const value = useAtomValue(atomPkName);
  cosnt setFn = useSetAtom(atomPkName);
  */
  const setToDos = useSetAtom(toDoState);
  const toDos = useAtomValue(toDoSelector);
  const [category, setCategory] = useAtom(categoryState);

  useEffect(() => {
    const result = sessionStorage.getItem(SessionStorage.TODO_DATA);
    if (result) {
      setToDos(JSON.parse(result) as IToDo[]);
    }
  }, [setToDos]);

  const onChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as Categories);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onChange={onChange}>
        <option value={Categories.TO_DO}>TO_DO</option>
        <option value={Categories.DOING}>DOING</option>
        <option value={Categories.DONE}>DONE</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
