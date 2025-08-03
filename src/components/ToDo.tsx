import { useSetAtom } from "jotai";
import { Categories, IToDo, SessionStorage, toDoState } from "../atoms";

function ToDo({ id, text, category }: IToDo) {
  const setToDos = useSetAtom(toDoState);

  //카테고리 update
  const updateToDo = (toDos: IToDo[], name: Categories) => {
    return toDos.map((toDo) =>
      toDo.id === id ? { ...toDo, category: name } : toDo
    );
  };

  //todo 삭제
  const deleteToDo = (toDos: IToDo[]) => {
    return toDos.filter((toDo) => toDo.id !== id);
  };

  //storage 저장
  const setSessionStorage = (toDos: IToDo[]) => {
    sessionStorage.setItem(SessionStorage.TODO_DATA, JSON.stringify(toDos));
  };

  const onClick = (name: Categories) => {
    setToDos((toDos) => {
      const result =
        Categories.DELETE === name
          ? deleteToDo(toDos)
          : updateToDo(toDos, name);

      setSessionStorage(result);
      return result;
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button onClick={() => onClick(Categories.DOING)}>Doing</button>
      )}
      {category !== Categories.TO_DO && (
        <button onClick={() => onClick(Categories.TO_DO)}>To Do</button>
      )}
      {category !== Categories.DONE && (
        <button onClick={() => onClick(Categories.DONE)}>Done</button>
      )}
      <button onClick={() => onClick(Categories.DELETE)}>X</button>
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
