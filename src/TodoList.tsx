import { useForm } from "react-hook-form";

function ToDoList() {
  /*   const [toDo, setToDo] = useState("");
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
  }; */

  //register: onChange, value 세팅할 필요 없음
  //watch: 값의 변화를 보는 함수
  const { register, watch } = useForm();
  console.log(watch());

  return (
    <div>
      <form>
        <input {...register("Email")} placeholder="Email" />
        <input {...register("firstName")} placeholder="firstName" />
        <input {...register("lastName")} placeholder="lastName" />
        <input {...register("username")} placeholder="username" />
        <input {...register("password")} placeholder="password" />

        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
