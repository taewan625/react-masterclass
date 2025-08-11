import { useAtomValue, useSetAtom } from "jotai";
import { useForm } from "react-hook-form";
import { selectedCategoryState, SessionStorage, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetAtom(toDoState);
  const selectedCategory = useAtomValue(selectedCategoryState);

  const { register, handleSubmit, setValue } = useForm<IForm>();

  //form 제출 후처리
  const handleValid = ({ toDo }: IForm) => {
    setToDos((toDos) => {
      //추가된 객체 생성
      const result = [
        { id: Date.now(), text: toDo, category: selectedCategory },
        ...toDos,
      ];

      //세선에 저장
      sessionStorage.setItem(SessionStorage.TODO_DATA, JSON.stringify(result));

      //setToDos 반환
      return result;
    });

    //input 값 비우기
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
