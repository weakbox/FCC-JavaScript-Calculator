import { useState } from 'react'
import './App.css'

const calcButtons = [
  {
    id: "clear",
    classes: "wide",
    text: "AC",
  },
  {
    id: "divide",
    classes: "normal operator",
    text: "/",
  },
  {
    id: "multiply",
    classes: "normal operator",
    text: "x",
  },
  {
    id: "seven",
    classes: "normal number",
    text: "7",
  },
  {
    id: "eight",
    classes: "normal number",
    text: "8",
  },
  {
    id: "nine",
    classes: "normal number",
    text: "9",
  },
  {
    id: "minus",
    classes: "normal operator",
    text: "-",
  },
  {
    id: "four",
    classes: "normal number",
    text: "4",
  },
  {
    id: "five",
    classes: "normal number",
    text: "5",
  },
  {
    id: "six",
    classes: "normal number",
    text: "6",
  },
  {
    id: "plus",
    classes: "normal operator",
    text: "+",
  },
  {
    id: "one",
    classes: "normal number",
    text: "1",
  },
  {
    id: "two",
    classes: "normal number",
    text: "2",
  },
  {
    id: "three",
    classes: "normal number",
    text: "3",
  },
  {
    id: "equals",
    classes: "normal tall",
    text: "=",
  },
  {
    id: "zero",
    classes: "wide number",
    text: "0",
  },
  {
    id: "decimal",
    classes: "normal number",
    text: ".",
  },
];

const drawCalcButtons = (buttons) => {
  return buttons.map((button) => {
    return (
      <button id={button.id} className={button.classes} key={button.id + "-button"}>{button.text}</button>
    );
  });
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="calc-container">
      <div className="display-container">Display</div>
      <div className="button-container">{drawCalcButtons(calcButtons)}</div>
    </div>
  )
}

export default App
