import React from 'react';
import './App.css';
import {useState} from 'react';
import 'string-math';
import stringMath from 'string-math';

function App() {
  const [calculatorField, setCalculatorField] = useState("0");

  const updateOutput = (input) => {
    calculatorField === "0" ? setCalculatorField(input) : setCalculatorField(calculatorField.concat(input));
  }

  const buttonClicked = (pressedButton) => () => {
    switch (pressedButton) {
      case '1':
        updateOutput("1"); break;
      case '2':
        updateOutput("2"); break;
      case '3':
        updateOutput("3"); break;
      case '4':
        updateOutput("4"); break;
      case '5':
        updateOutput("5"); break;
      case '6':
        updateOutput("6"); break;
      case '7':
        updateOutput("7"); break;
      case '8':
        updateOutput("8"); break;
      case '9':
        updateOutput("9"); break;
      case '0':
        updateOutput("0"); break;
      case '+': // Addition
        updateOutput("+"); break;
      case '-': // Subtraction
        updateOutput("-"); break;
      case '*': // Multiplication
        updateOutput("*"); break;
      case '/': // Division
        updateOutput("/"); break;
      case 'c': // Clear
        setCalculatorField("0"); break;
      case 'e': // Enter
        setCalculatorField(stringMath(calculatorField).toString()); break;
      default:
        console.log("input error"); break;
    }
  }

  // Update the calculator field based on user input
  const handleCalculatorFieldChange = (event) => {
    setCalculatorField(event.target.value);
  }

  return (
    <div className="App">
      <input type="text" value={calculatorField} onChange={handleCalculatorFieldChange} className="calc_input"></input>
      <button onClick={buttonClicked('+')} className="button">+</button>
      <button onClick={buttonClicked('-')} className="button">-</button>
      <button onClick={buttonClicked('*')} className="button">*</button>
      <button onClick={buttonClicked('/')} className="button">/</button>
      <button onClick={buttonClicked('7')} className="button">7</button>
      <button onClick={buttonClicked('8')} className="button">8</button>
      <button onClick={buttonClicked('9')} className="button">9</button>
      <button onClick={buttonClicked('c')} className="button clear">C</button>
      <button onClick={buttonClicked('4')} className="button">4</button>
      <button onClick={buttonClicked('5')} className="button">5</button>
      <button onClick={buttonClicked('6')} className="button">6</button>
      <button onClick={buttonClicked('e')} className="button enter">enter</button>
      <button onClick={buttonClicked('1')} className="button">1</button>
      <button onClick={buttonClicked('2')} className="button">2</button>
      <button onClick={buttonClicked('3')} className="button">3</button>
      <button onClick={buttonClicked('0')} className="button zero">0</button>
    </div>
  );
}

export default App;
