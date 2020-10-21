import React from 'react';
import './App.css';
import {useState} from 'react';
import 'string-math';
import stringMath from 'string-math';

function App() {
  const [calculatorInput, setCalculatorInput] = useState("");

  const buttonClicked = (pressedButton) => () => {
    switch (pressedButton) {
      case '1':
        setCalculatorInput(calculatorInput.concat("1"));
        break;
      case '2':
        setCalculatorInput(calculatorInput.concat("2"));
        break;
      case '3':
        setCalculatorInput(calculatorInput.concat("3"));
        break;
      case '4':
        setCalculatorInput(calculatorInput.concat("4"));
        break;
      case '5':
        setCalculatorInput(calculatorInput.concat("5"));
        break;
      case '6':
        setCalculatorInput(calculatorInput.concat("6"));
        break;
      case '7':
        setCalculatorInput(calculatorInput.concat("7"));
        break;
      case '8':
        setCalculatorInput(calculatorInput.concat("8"));
        break;
      case '9':
        setCalculatorInput(calculatorInput.concat("9"));
        break;
      case '0':
        setCalculatorInput(calculatorInput.concat("0"));
        break;
      case '+':
        setCalculatorInput(calculatorInput.concat("+"));
        break;
      case '-':
        setCalculatorInput(calculatorInput.concat("-"));
        break;
      case '*':
        setCalculatorInput(calculatorInput.concat("*"));
        break;
      case '/':
        setCalculatorInput(calculatorInput.concat("/"));
        break;
      case 'c':
        setCalculatorInput("");
        break;
      case 'e':
        setCalculatorInput(stringMath(calculatorInput).toString());
        break;
      default:
        console.log("input error");
        break;
    }
  }

  const handleCalculatorInputChange = (event) => {
    setCalculatorInput(event.target.value);
  }

  return (
    <div className="App">
      <input type="text" value={calculatorInput} onChange={handleCalculatorInputChange} className="calc_input"></input>
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
