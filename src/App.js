import React from 'react';
import './App.css';
import Heading from './Heading'
import AdBlock from './AdBlock'
import Data from './data.json';

function App() {
  return (
    <div className="App">
      <Heading />
      <AdBlock jobs={Data}/>
    </div>
  );
}

export default App;
