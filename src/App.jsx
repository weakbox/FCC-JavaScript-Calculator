import React, { useEffect, useState } from 'react';
import './App.css';

const calcButtons = [
  { id: "clear", classes: "wide", text: "AC" },
  { id: "divide", classes: "normal operator", text: "/" },
  { id: "multiply", classes: "normal operator", text: "x" },
  { id: "seven", classes: "normal number", text: "7" },
  { id: "eight", classes: "normal number", text: "8" },
  { id: "nine", classes: "normal number", text: "9" },
  { id: "subtract", classes: "normal operator", text: "-" },
  { id: "four", classes: "normal number", text: "4" },
  { id: "five", classes: "normal number", text: "5" },
  { id: "six", classes: "normal number", text: "6" },
  { id: "add", classes: "normal operator", text: "+" },
  { id: "one", classes: "normal number", text: "1" },
  { id: "two", classes: "normal number", text: "2" },
  { id: "three", classes: "normal number", text: "3" },
  { id: "equals", classes: "normal tall", text: "=" },
  { id: "zero", classes: "wide number", text: "0" },
  { id: "decimal", classes: "normal number", text: "." },
];

const drawCalcButtons = (buttons) => {
  return buttons.map((button) => {
    return (
      <button 
        key={button.id + "-button"}
        id={button.id} 
        className={button.classes}
      >
        {button.text}
      </button>
    );
  });
};

function App() {
  const [display, setDisplay] = useState("Get started!");
  const [operand, setOperand] = useState(0);
  const [prevOperand, setPrevOperand] = useState(null);
  const [operator, setOperator] = useState(null);

  // Use event delegation to handle button functionality:
  const handleClick = (event) => {
    const buttonId = event.target.id;
    switch (buttonId) {
      // Operators:
      case "divide":
      case "multiply":
      case "subtract":
      case "add":
        const operator = event.target.innerText;
        handleOperator(operator);
        break;
      
      // Numbers:
      case "zero":
      case "one":
      case "two":
      case "three":
      case "four":
      case "five":
      case "six":
      case "seven":
      case "eight":
      case "nine":
        const number = event.target.innerText;
        handleNumber(number);
        break;
      
      // Special cases:
      case "clear":
        handleClear();
        break;

      case "equals":
        handleEquals();
        break;

      case "decimal":
        handleDecimal();
        break;
        
      // Default case:
      default:
        return;
    }
  };

  const handleNumber = (number) => {
    // React provides the previous state as an argument (prevOperand in this case):
    setOperand((prevOperand) => {
      // Do not allow user to add leading zeros:  
      const newOperand = prevOperand ? prevOperand + number: number;

      if (newOperand.length >= 12) { return operand; }

      setDisplay(newOperand);
      return newOperand;
    });
  };

  const handleOperator = (operator) => {
    console.log(operator);
  };

  const handleClear = () => {
    setDisplay(0);
    setOperand(0);
    setPrevOperand(null);
    setOperator(null);
  };

  const handleEquals = () => {};
  const handleDecimal = () => {};

  return (
    <div className="calc-container">
      <div className="display-container">
        <h2>Calc</h2>
        <h2 id="display">{display}</h2>
      </div>
      <div className="button-container" onClick={handleClick}>
        {drawCalcButtons(calcButtons)}
        </div>
    </div>
  );
}

export default App;
