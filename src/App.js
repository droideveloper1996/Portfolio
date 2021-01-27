import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import HomeComponent from "./components/HomeComponent/home";

function App() {
  return (
    <Switch>
      <Route path="/" component={HomeComponent} />
      <Route path="/" component={HomeComponent} />
    </Switch>
  );
}

export default App;
