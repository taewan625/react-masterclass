import { error } from "console";
import { useForm } from "react-hook-form";

interface IForm {
  email: string;
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  password1: string;
  memo?: string; //비필수 일 경우

  extraError?: string;
}

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
  const {
    register, //각 input의 유효성 조건 거는 함수  1.기본 required 2. pattern 3.custom validate
    handleSubmit, //form에서 사용하는 함수
    formState: { errors }, //에러 정보로 에러 문구 표출
    setError, //form 제출 직전 최종 에러 점검
    reset, //제출 후 값 비우기
  } = useForm<IForm>({
    defaultValues: {
      email: "@naver.com",
    },
  });

  //최종 유효성 검사
  const onValid = (data: IForm) => {
    if (data.password !== data.password1) {
      setError("password1", { message: "pw are not the same" });
    }

    reset();

    //만약 api 통신 시, 서버측 에러로 오류가 생기는 경우 아래처럼 setError 세팅하여 사용 가능
    //setError("extraError", { message: "server offline" });
    console.log(data);
  };

  console.log(errors);

  return (
    <div>
      {/* handleSubmit으로 유효성 검증을 마친 후 사용자 생성함수인 onValid를 호출 */}
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: "Only naver.com emails allowed",
            },
          })}
          placeholder="Email"
        />
        <span>{errors?.email?.message}</span>

        <input
          {...register("firstName", {
            required: "write here",
            //custom validation
            validate: (value) =>
              value.includes("taewan") ? "no taewan allowed" : true,
          })}
          placeholder="First Name"
        />
        <span>{errors?.firstName?.message}</span>

        <input
          {...register("lastName", { required: "write here" })}
          placeholder="Last Name"
        />
        <span>{errors?.lastName?.message}</span>

        <input
          {...register("username", { required: "write here", minLength: 10 })}
          placeholder="Username"
        />
        <span>{errors?.username?.message}</span>

        <input
          {...register("password", { required: "write here", minLength: 5 })}
          placeholder="Password"
        />
        <span>{errors?.password?.message}</span>

        <input
          {...register("password1", {
            required: "Password is required",
            minLength: {
              value: 5,
              message: "Your password is too short.",
            },
          })}
          placeholder="Password1"
        />
        <span>{errors?.password1?.message}</span>

        <input {...register("memo")} placeholder="memo" />

        <button>Add</button>
        <span>{errors?.extraError?.message}</span>
      </form>
    </div>
  );
}

export default ToDoList;
