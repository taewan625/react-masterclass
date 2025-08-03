import { useForm } from "react-hook-form";
import { atom, useAtom, useSetAtom } from "jotai";

interface IForm {
  toDo: string;
}

interface IToDo {
  id: number;
  text: string;
  //string에서 특정 문자열만 가능하도록 제약
  category: "TODO" | "ING" | "DONE";
}

//상태 정의
const toDoState = atom<IToDo[]>([]);

function ToDoList() {
  //get & set
  const [toDos, setToDos] = useAtom(toDoState);

  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => [
      { id: Date.now(), text: toDo, category: "TODO" },
      ...oldToDos,
    ]);
    setValue("toDo", "");
  };

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <form onSubmit={handleSubmit(handleValid)}>
        <input
          {...register("toDo", {
            required: "Please wrtie a To Do",
          })}
          placeholder="Write a to do"
        />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((todo) => (
          <li key={todo.id}> {todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
