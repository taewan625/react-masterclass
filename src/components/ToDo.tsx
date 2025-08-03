import { useSetAtom } from "jotai";
import { IToDo, toDoState } from "../atoms";

function ToDo({ id, text, category }: IToDo) {
  const setToDos = useSetAtom(toDoState);

  const onClick = (name: IToDo["category"]) => {
    setToDos((oldToDos) => {
      return oldToDos.map((oldToDo: IToDo) =>
        oldToDo.id === id ? { ...oldToDo, category: name } : oldToDo
      );
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button onClick={() => onClick("DOING")}>Doing</button>
      )}
      {category !== "TO_DO" && (
        <button onClick={() => onClick("TO_DO")}>To Do</button>
      )}
      {category !== "DONE" && (
        <button onClick={() => onClick("DONE")}>Done</button>
      )}
    </li>
  );
}

export default ToDo;

/* name 형식 todo category 변경 단점: 타입 체크가 불안정 As로 type 추정 강제함.
import { useSetAtom } from "jotai";
import { IToDo, toDoState } from "../atoms";

function ToDo({ id, text, category }: IToDo) {
  const setToDos = useSetAtom(toDoState);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;

    setToDos((oldToDos) => {
      return oldToDos.map((oldToDo: IToDo) =>
        oldToDo.id === id
          ? { ...oldToDo, category: name as IToDo["category"] }
          : oldToDo
      );
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
 */
