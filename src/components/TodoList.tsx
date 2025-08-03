import { useAtomValue } from "jotai";
import { toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  /* jotai atom function 정리
  //초기화
  const atomPkName = atom<interface>(initvalue);
  
  //get & set
  const [value, setFn] = useAtom(); 
  
  //get, set 분리
  const value = useAtomValue(atomPkName);
  cosnt setFn = useSetAtom(atomPkName);
  */

  const { to_do, doing, done } = useAtomValue(toDoSelector);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <h2>TO DO</h2>
      <ul>
        {to_do.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />

      <h2>DOING</h2>
      <ul>
        {doing.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />

      <h2>DONE</h2>
      <ul>
        {done.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default ToDoList;
