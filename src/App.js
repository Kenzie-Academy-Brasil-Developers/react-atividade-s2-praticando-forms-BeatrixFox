import "./App.css";
import Form from "./components/Form/Form";
import { Route, Switch } from "react-router-dom";
import CardColection from "./components/CardColection/CardColection";
import users from "./users";

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <Switch>
          <Route exact path="/cards">
            <CardColection filesUser={users} />
          </Route>
          <Route exact path="/">
            <Form users={users} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
