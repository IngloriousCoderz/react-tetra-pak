import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import Home from "./home";
import About from "./about";

function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>My Website</h1>
        </header>
        <Link to="/about">About</Link>|<Link to="/">Home</Link>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home name="Matteo Antony" />
          </Route>
        </Switch>
        <footer>&copy; Tetra Pak 2022</footer>
      </div>
    </Router>
  );
}

export default App;
