import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import LeagueDetail from "./components/LeagueDetail/LeagueDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/league/:idLeague">
            <LeagueDetail></LeagueDetail>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
