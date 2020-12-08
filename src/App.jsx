import { ThemeProvider } from "styled-components";
import { theme } from "./styles";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login, Dashboard, Rodadas, Times, Ranking } from "./pages";
import { Layout } from "./components";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>

          <Layout>
            <Route path="/rodadas">
              <Rodadas />
            </Route>

            <Route exact path="/">
              <Dashboard />
            </Route>

            <Route path="/times">
              <Times />
            </Route>

            <Route path="/ranking">
              <Ranking />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
