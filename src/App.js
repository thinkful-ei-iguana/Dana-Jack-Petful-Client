import React from 'react';
import './App.css';
import react, {
  Component
} from 'react';
import AdoptionProcess from './AdoptionProcess';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          This is Petful
        </header>
        <AdoptionProcess></AdoptionProcess>
      </div>
    );
  }
}

export default App;
