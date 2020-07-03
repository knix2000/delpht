import React from 'react';
import logo from './logo.svg';
import Plot from 'react-plotly.js';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <script src="plotly-latest.min.js"></script>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={{width: 320, height: 240, title: 'A Fancy Plot'}}
      />

    <form>
      <label>
        bla:
        <input type="text" name="bla"/>
      </label>
      <label>
        bla2:
        <input type="text" name="bla2"/>
      </label>
      <input type="submit" value="Calculate"/>
    </form>
    </div>
  );
}

export default App;
