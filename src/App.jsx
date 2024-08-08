import React, { useState } from 'react';
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

// Iterates through equation array to evaluate result.
const evaluate = (equation) => {
  let firstOperand = 0;
  let secondOperand = 0;
  let operator = null;
  for (let i = 0; i < equation.length; i++) {
    const element = equation[i];
    const isNumber = !isNaN(Number(element));
    
    if (isNumber) {
      if (!firstOperand) {
        firstOperand = Number(element);
      } else {
        secondOperand = Number(element);
        // Calculate result:
        switch (operator) {
          case "+":
            firstOperand = firstOperand + secondOperand;
            break;
          case "-":
            firstOperand = firstOperand - secondOperand;
            break;
          case "x":
            firstOperand = firstOperand * secondOperand;
            break;
          case "/":
            firstOperand = firstOperand / secondOperand;
            break;
          default:
            console.error(`An invalid operator was used: "${operator}"`);
        }
        console.log("Evaluating the equation:", firstOperand, secondOperand, operator, equation);
        secondOperand = 0;
        operator = 0;
      }
    } else {
        // Handle negative case:
        if (operator && element === "-")
        {
          equation[i + 1] = !isNaN(equation[i + 1]) ? -equation[i + 1] : equation[i + 1]; // Sloppy code -> replace!
          console.log("Negavtive spotted.");
        } else {
          operator = element;
        }   
    }
  }
  return firstOperand.toString();
};

function App() {
  const [operand, setOperand] = useState("0");
  const [equation, setEquation] = useState([]);

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
    setOperand(o => o !== "0" ? o + number : number);
  };

  const handleOperator = (operator) => {
    // Do not append empty operand to equation.
    operand ? setEquation(e => [...e, operand, operator]) : setEquation(e => [...e, operator]);
    setOperand("");
  };

  const handleClear = () => {
    setOperand("0");
    setEquation([]);
  };

  const handleEquals = () => {
    const result = evaluate([...equation, operand]);
  
    setOperand(result); // Set new operand as result of calculation.
    setEquation([]);  // Reset equation.
  };

  const handleDecimal = () => {
    setOperand(o => !o.includes(".") ? o + "." : o);
  };

  return (
    <div className="calc-container">
      <div className="display-container">
        <h2>Calc</h2>
        <h2 id="display">{equation}{operand}</h2>
      </div>
      <div className="button-container" onClick={handleClick}>
        {drawCalcButtons(calcButtons)}
        </div>
    </div>
  );
}

export default App;
