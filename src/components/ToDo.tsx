import { IToDo } from "../atoms";

function ToDo({ text }: IToDo) {
  return (
    <li>
      {text}
      <button>Doing</button>
      <button>Done</button>
      <button>ToDo</button>
    </li>
  );
}

export default ToDo;
