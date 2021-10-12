import { Switch, Route } from "react-router";
import "./App.css";
import Character from "./pages/Character/Character";
import CharacterList from "./pages/Character-list/CharacterList";

function App() {
  return (
    <div className="App">
      <h1>React App (GraphQL-Apollo)</h1>
      <h2>API : "https://rickandmortyapi.com/graphql"</h2>
      <Switch>
        <Route strict exact path="/">
          <CharacterList />
        </Route>
        <Route strict exact path="/:id">
          <Character />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
