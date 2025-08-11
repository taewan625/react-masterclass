import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { useEffect } from "react";
import {
  categoryState,
  selectedCategoryState,
  SessionStorage,
  toDoSelector,
  toDoState,
} from "../atoms";
import CreateCategory from "./CreateCategory";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {
  const setToDos = useSetAtom(toDoState);
  const setCategories = useSetAtom(categoryState);
  const [selectedCategory, setSelectedCategory] = useAtom(
    selectedCategoryState
  );

  const toDos = useAtomValue(toDoSelector);
  const categories = useAtomValue(categoryState);

  useEffect(() => {
    const todos = sessionStorage.getItem(SessionStorage.TODO_DATA);
    const categories = sessionStorage.getItem(SessionStorage.CATEGORY_DATA);

    if (todos) {
      setToDos(JSON.parse(todos));
    }

    if (categories) {
      setCategories(JSON.parse(categories));
    }
  }, [setToDos, setCategories]);

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
