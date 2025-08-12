import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Tv from "./Routes/Tv";
import Search from "./Routes/Search";
import Header from "./Components/Header";

function App() {
  return (
    //router 환경 제공
    <BrowserRouter>
      <Header />
      {/* 첫번째 match된 router만 렌더링 : 그래서 / 경로는 항상 마지막에 들어가야함*/}
      <Switch>
        {/* 각 경로 */}
        <Route path="/tv">
          <Tv />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
