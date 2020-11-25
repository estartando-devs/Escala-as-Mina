import { ThemeProvider } from "styled-components"; //https://www.npmjs.com/package/react-theme-provider
import { theme, GlobalStyle } from "./styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login, Dashboard, Rodadas, Jogadoras, Times, Ranking } from "./pages";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/login">Login link</Link>
            </li>
            <li>
              <Link to="/">Dashboard link</Link>
            </li>
            <li>
              <Link to="/rodadas">Rodadas link</Link>
            </li>
            <li>
              <Link to="/jogadoras">Jogadoras link</Link>
            </li>
            <li>
              <Link to="/times">Times link</Link>
            </li>
            <li>
              <Link to="/ranking">Ranking link</Link>
            </li>
          </ul>
        </div>

        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/rodadas">
            <Rodadas />
          </Route>

          <Route path="/jogadoras">
            <Jogadoras />
          </Route>

          <Route path="/times">
            <Times />
          </Route>

          <Route path="/ranking">
            <Ranking />
          </Route>

          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
