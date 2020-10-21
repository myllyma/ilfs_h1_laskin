import React from 'react';
import './App.css';
import {useState} from 'react';
import 'string-math';
import stringMath from 'string-math';

function App() {
  const [calculatorField, setCalculatorField] = useState("0");

  const processCalculatorFieldUpdate = (input) => {
    calculatorField === "0" ? setCalculatorField(input) : setCalculatorField(calculatorField.concat(input));
  }

  // Handle button presses.
  const handleButtonClick = (pressedButton) => () => {
    switch (pressedButton) {
      case '1':
        processCalculatorFieldUpdate("1"); break;
      case '2':
        processCalculatorFieldUpdate("2"); break;
      case '3':
        processCalculatorFieldUpdate("3"); break;
      case '4':
        processCalculatorFieldUpdate("4"); break;
      case '5':
        processCalculatorFieldUpdate("5"); break;
      case '6':
        processCalculatorFieldUpdate("6"); break;
      case '7':
        processCalculatorFieldUpdate("7"); break;
      case '8':
        processCalculatorFieldUpdate("8"); break;
      case '9':
        processCalculatorFieldUpdate("9"); break;
      case '0':
        processCalculatorFieldUpdate("0"); break;
      case '+':
        processCalculatorFieldUpdate("+"); break;
      case '-':
        processCalculatorFieldUpdate("-"); break;
      case '*':
        processCalculatorFieldUpdate("*"); break;
      case '/':
        processCalculatorFieldUpdate("/"); break;
      case '.':
        processCalculatorFieldUpdate("."); break;
      case 'b': // Backspace
        calculatorField.length > 1 ? setCalculatorField(calculatorField.slice(0, -1)) : setCalculatorField("0"); break;
      case 'c': // Clear
        setCalculatorField("0"); break;
      case 'e': // Enter
        let mathResult = 0;
        try {
          mathResult = stringMath(calculatorField);
        } catch (error) {
          console.log("erroneous calculation");
          return;
        }
        setCalculatorField(mathResult.toString()); break;
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
      <button onClick={handleButtonClick('+')} className="button">+</button>
      <button onClick={handleButtonClick('-')} className="button">-</button>
      <button onClick={handleButtonClick('*')} className="button">*</button>
      <button onClick={handleButtonClick('/')} className="button">/</button>
      <button onClick={handleButtonClick('7')} className="button">7</button>
      <button onClick={handleButtonClick('8')} className="button">8</button>
      <button onClick={handleButtonClick('9')} className="button">9</button>
      <button onClick={handleButtonClick('c')} className="button clear">C</button>
      <button onClick={handleButtonClick('4')} className="button">4</button>
      <button onClick={handleButtonClick('5')} className="button">5</button>
      <button onClick={handleButtonClick('6')} className="button">6</button>
      <button onClick={handleButtonClick('e')} className="button enter">=</button>
      <button onClick={handleButtonClick('1')} className="button">1</button>
      <button onClick={handleButtonClick('2')} className="button">2</button>
      <button onClick={handleButtonClick('3')} className="button">3</button>
      <button onClick={handleButtonClick('.')} className="button period">.</button>
      <button onClick={handleButtonClick('0')} className="button zero">0</button>
      <button onClick={handleButtonClick('b')} className="button backspace">&lt;</button>
    </div>
  );
}

export default App;
