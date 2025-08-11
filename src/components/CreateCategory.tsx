import { useSetAtom } from "jotai";
import { useForm } from "react-hook-form";
import { categoryState, SessionStorage } from "../atoms";

interface IForm {
  category: string;
}

function CreateCategory() {
  const setCategoryState = useSetAtom(categoryState);

  const { register, handleSubmit, setValue } = useForm<IForm>();

  //form 제출 후처리
  const handleValid = ({ category }: IForm) => {
    setCategoryState((categories) => {
      const result = [
        ...categories,
        { id: ++categories.length, type: category },
      ];

      sessionStorage.setItem(
        SessionStorage.CATEGORY_DATA,
        JSON.stringify(result)
      );

      return result;
    });

    //input 값 비우기
    setValue("category", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("category", {
          required: "Please wrtie a category",
        })}
        placeholder="Write a category"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateCategory;
