import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import auth from "./hoc/auth";

//in-folder component

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={auth(HomePage, null)} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
