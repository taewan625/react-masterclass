import { useAtom, useAtomValue } from "jotai";
import { categoryState, IToDo, toDoSelector } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

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

  const toDos = useAtomValue(toDoSelector);
  const [category, setCategory] = useAtom(categoryState);

  const onChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as IToDo["category"]);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onChange={onChange}>
        <option value="TO_DO">TO_DO</option>
        <option value="DOING">DOING</option>
        <option value="DONE">DONE</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
