import React from 'react';
import './App.css';
import Test from "./screens/TestScreen/Test"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Test name={"ali"} enthusiasmLevel={10} />
      </header>
    </div>
  );
}

export default App;
