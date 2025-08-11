import { useAtomValue, useSetAtom } from "jotai";
import {
  categoryState,
  IToDo,
  selectedCategoryState,
  SessionStorage,
  toDoState,
} from "../atoms";

function ToDo({ id, text }: IToDo) {
  const setToDos = useSetAtom(toDoState);
  const selectedCategory = useAtomValue(selectedCategoryState);
  const categories = useAtomValue(categoryState);

  //카테고리 update
  const updateToDo = (toDos: IToDo[], name: string) => {
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

  const onClick = (type: string) => {
    setToDos((toDos) => {
      const result =
        type === "delete" ? deleteToDo(toDos) : updateToDo(toDos, type);

      setSessionStorage(result);
      return result;
    });
  };

  return (
    <li>
      <span>{text}</span>
      {categories.map((category, index) => {
        return category.type !== selectedCategory ? (
          <button key={index} onClick={() => onClick(category.type)}>
            {category.type}
          </button>
        ) : null;
      })}
      <button onClick={() => onClick("delete")}>X</button>
    </li>
  );
}

export default ToDo;
