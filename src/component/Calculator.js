import React, { useState } from 'react';
import './Calculator.css';
import './HistoryButton.css';
import Button from './Button'; // Import the Button component
import HistoryButton from './HistoryButton'; // Import the HistoryButton component


const Calculator = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);

  const handleClick = (e) => {
    const value = e.target.innerHTML;
    if (value === '=') {
      const result = eval(input);
      setInput(result);
      setHistory([...history, `${input} = ${result}`]); // Update history with the calculation
    } else if (value === 'AC') {
      setInput('');
    } else if (value === 'DEL') {
      setInput(input.slice(0, -1));
    } else if (value === '%') {
      setInput(input / 100);
    } else if (value === '+/-') {
      setInput(parseFloat(input) * -1); // Toggling the sign
    } else {
      setInput(input + value);
    }
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly />
      <div>
        <HistoryButton history={history} clearHistory={clearHistory} />
      </div>
      <div>
        <Button value="AC" onClick={handleClick} className="button operator" />
        <Button value="DEL" onClick={handleClick} className="button operator" />
        <Button value="+/-" onClick={handleClick} className="button operator" />
        <Button value="/" onClick={handleClick} className="button operator" />
      </div>
      <div>
        <Button value="7" onClick={handleClick} className="button" />
        <Button value="8" onClick={handleClick} className="button" />
        <Button value="9" onClick={handleClick} className="button" />
        <Button value="*" onClick={handleClick} className="button operator" />
      </div>
      <div>
        <Button value="4" onClick={handleClick} className="button" />
        <Button value="5" onClick={handleClick} className="button" />
        <Button value="6" onClick={handleClick} className="button" />
        <Button value="-" onClick={handleClick} className="button operator" />
      </div>
      <div>
        <Button value="1" onClick={handleClick} className="button" />
        <Button value="2" onClick={handleClick} className="button" />
        <Button value="3" onClick={handleClick} className="button" />
        <Button value="+" onClick={handleClick} className="button operator" />
      </div>
      <div>
        <Button value="%" onClick={handleClick} className="button" />
        <Button value="0" onClick={handleClick} className="button" />
        <Button value="." onClick={handleClick} className="button" />
        <Button value="=" onClick={handleClick} className="button equalBtn" />
      </div>
    </div>
  );
};

export default Calculator;
