import { useState } from "react";

function ToDoList() {
  const [todo, setValue] = useState("");

  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(todo);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Write a to do "
          value={todo}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default ToDoList;
