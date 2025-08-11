import { useAtom, useAtomValue, useSetAtom } from "jotai";
import {
  categoryState,
  IToDo,
  selectedCategoryState,
  SessionStorage,
  toDoSelector,
  toDoState,
} from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";
import { useEffect } from "react";
import CreateCategory from "./CreateCategory";

function ToDoList() {
  const setToDos = useSetAtom(toDoState);
  const [selectedCategory, setSelectedCategory] = useAtom(
    selectedCategoryState
  );

  const toDos = useAtomValue(toDoSelector);
  const categories = useAtomValue(categoryState);

  useEffect(() => {
    const result = sessionStorage.getItem(SessionStorage.TODO_DATA);

    if (result) {
      setToDos(JSON.parse(result) as IToDo[]);
    }
  }, [setToDos]);

  const onChange = (event: React.FormEvent<HTMLSelectElement>) => {
    setSelectedCategory(event.currentTarget.value);
  };

  return (
    <div>
      <h1>To Dos</h1>
      <p>
        ps. I use SessionStorage. when browser tab close data also remove
        together.
      </p>
      <hr />

      <CreateCategory />

      <select value={selectedCategory} onChange={onChange}>
        {categories.map((category) => (
          <option key={category.id} value={category.type}>
            {category.type}
          </option>
        ))}
      </select>

      <CreateToDo />

      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
