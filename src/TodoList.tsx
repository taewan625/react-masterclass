import { useForm } from "react-hook-form";

function ToDoList() {
  /*
  const [toDo, setToDo] = useState("");
  const [toDoError, setToDoError] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setToDo(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (toDo.length < 10) {
      return setToDoError("To do should be logner");
    }
    setToDoError("");
  }; 
  */

  //register: onChange, value 세팅할 필요 없음
  //watch: 값의 변화를 보는 함수
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };

  console.log(formState.errors);

  return (
    <div>
      {/* handleSubmit으로 유효성 검증을 마친 후 사용자 생성함수인 onValid를 호출 */}
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("Email", { required: "isRequired" })}
          placeholder="Email"
        />
        <input
          {...register("firstName", {
            required: true,
            minLength: { value: 10, message: "short over 10" },
          })}
          placeholder="firstName"
        />
        <input
          {...register("lastName", { required: true, minLength: 5 })}
          placeholder="lastName"
        />
        <input
          {...register("username", { required: true })}
          placeholder="username"
        />
        <input
          {...register("password", { required: true })}
          placeholder="password"
        />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
