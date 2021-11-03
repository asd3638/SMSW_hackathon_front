import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./views/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} /> (4)
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
