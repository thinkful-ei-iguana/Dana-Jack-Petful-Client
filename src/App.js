import React from 'react';
import './App.css';
import react, {
  Component
} from 'react';
import AdoptionProcess from './AdoptionProcess';
import {
  Switch,
  Route
} from 'react-router-dom';
import { AdoptNow } from './AdoptNow';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>This is Petful</h1>
        </header>
        <Switch>
          <Route
            exact
            path={'/'}
            component={AdoptionProcess}
          ></Route>
          <Route
            exact
            path={'/adopt'}
            component={AdoptNow}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
