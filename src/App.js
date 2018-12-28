import React, { Component } from 'react';
import './App.css';
import './DogPics/DogPics';
import DogPics from './DogPics/DogPics';

class App extends Component {
      render() {
        return (
          <div className="App">
            <header className="App-header">
        <DogPics />
            </header>
          </div>
    )
}
}

export default App;
