import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./Home";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
              <h1>This is the search page</h1>
          </Route>
          <Route path="/">
              <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
