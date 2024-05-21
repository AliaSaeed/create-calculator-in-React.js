// App.js
import React, { useState } from 'react';
import './App.css';
import './component/Calculator.css';
import Calculator from './component/Calculator';
import HistoryModal from './component/HistoryModal'; // Import HistoryModal component

const App = () => {
  const [history, setHistory] = useState([]); // State for history

  return (
    <div className="app">
      <h1>React Calculator</h1>
      <Calculator history={history} setHistory={setHistory} /> {/* Pass history state and setter function */}
      <HistoryModal history={history} setHistory={setHistory} /> {/* Render HistoryModal component */}
    </div>
  );
};

export default App;
