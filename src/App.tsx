import { useState } from "react";

function App() {
  const [value, setValue] = useState<string>("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello, ", value);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="username" value={value} onChange={onChange} />
        <button>login</button>
      </form>
    </div>
  );
}

export default App;
