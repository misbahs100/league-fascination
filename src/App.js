import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import LeagueDetail from "./components/LeagueDetail/LeagueDetail";
import NothingFound from "./components/NothingFound/NothingFound";
import Social from "./components/Social/Social";
import Features from "./components/Features/Features";
import About from "./components/About/About";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <Home/>
        </Route>
        <Route path="/home">
            <Home/>
        </Route>
        <Route path="/features">
            <Features/>
        </Route>
        <Route path="/about">
            <About/>
        </Route>
        <Route path="/league/:idLeague/:social">
          <Social></Social>
        </Route>
        <Route path="/league/:idLeague">
            <LeagueDetail></LeagueDetail>
        </Route>
        <Route path="*">
            <NothingFound></NothingFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
