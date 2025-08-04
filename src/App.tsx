import { useAtom, useAtomValue } from "jotai";
import { hourSelect, minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useAtom<number>(minuteState);
  const hours = useAtomValue(hourSelect);

  const onchange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };

  return (
    <div>
      <input
        value={minutes}
        onChange={onchange}
        type="number"
        placeholder="minutes"
      />
      <input value={hours} type="number" placeholder="hours" readOnly />
    </div>
  );
}

export default App;
