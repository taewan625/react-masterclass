import { useAtomValue } from "jotai";
import { toDoState } from "../atoms";
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

  const toDos = useAtomValue(toDoState);
  console.log(toDos);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
