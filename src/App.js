import { Switch, Route } from "react-router";
import "./App.css";
import Character from "./pages/Character/Character";
import CharacterList from "./pages/Character-list/CharacterList";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="App">
      <h1>React App (GraphQL-Apollo)</h1>
      <h2>API : "https://rickandmortyapi.com/graphql"</h2>
      <Switch>
        <Route strict exact path="/">
          <CharacterList />
        </Route>
        <Route strict exact path="/search">
          <Search />
        </Route>
        <Route strict exact path="/:id">
          <Character />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
