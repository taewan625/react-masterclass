import { BrowserRouter, Switch, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";

interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}

function Router({ isDark, toggleDark }: IRouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        {/* params를 가짐을 의미 */}
        <Route path={"/:coinId"}>
          <Coin isDark={isDark} />
        </Route>
        <Route path={"/"}>
          <Coins toggleDark={toggleDark} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
