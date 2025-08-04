import { useAtom } from "jotai";
import { hourSelect, minuteState } from "./atoms";

function App() {
  const [minutes, setMinutes] = useAtom<number>(minuteState);
  const [hours, setHours] = useAtom<number>(hourSelect);

  const onchange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };

  const onChangeHour = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };

  return (
    <div>
      <input
        value={minutes}
        onChange={onchange}
        type="number"
        placeholder="minutes"
      />
      <input
        value={hours}
        onChange={onChangeHour}
        type="number"
        placeholder="hours"
      />
    </div>
  );
}

export default App;
