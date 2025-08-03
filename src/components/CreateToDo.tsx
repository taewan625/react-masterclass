import { useAtomValue, useSetAtom } from "jotai";
import { useForm } from "react-hook-form";
import { categoryState, SessionStorage, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  //set만 필요로 하는 경우
  const setToDos = useSetAtom(toDoState);
  const category = useAtomValue(categoryState);

  const { register, handleSubmit, setValue } = useForm<IForm>();

  const handleValid = ({ toDo }: IForm) => {
    setToDos((toDos) => {
      const result = [
        { id: Date.now(), text: toDo, category: category },
        ...toDos,
      ];
      sessionStorage.setItem(SessionStorage.TODO_DATA, JSON.stringify(result));
      return result;
    });

    setValue("toDo", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("toDo", {
          required: "Please wrtie a To Do",
        })}
        placeholder="Write a to do"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateToDo;
