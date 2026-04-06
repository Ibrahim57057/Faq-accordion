import React, { useState } from "react";
import ReactDom from "react-dom";
import "./App.css";

export default function App() {
  const [display, setDisplay] = useState("0");
  const [operator, setOperator] = useState("");
  const [firstNumber, setFirstNumber] = useState("");
  const [theme, setTheme] = useState(1);


  // Handle number clicks
  const handleNumber = function (value) {
    if (display === "0") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };
  // Handle decimal point

  const handleDot = function () {
    if (display.includes(".")) return;
    setDisplay(display + ".");
  };
  // Handle operator clicks
  const handleOperator = function (value) {
    setOperator(value);
    setFirstNumber(display);
    setDisplay(display + " " + value + " ");
  };

  // Handle Del
  const handleDelete = function () {
    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  };
  // handle reset
  const handleReset = function () {
    setDisplay("0");
    setOperator("");
    setFirstNumber("");
  };
  // handle equals
  const handleEquals = function () {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(display.split(" ").pop());

    let result;
    if (operator === "+") result = num1 + num2;
    if (operator === "-") result = num1 - num2;
    if (operator === "x") result = num1 * num2;
    if (operator === "/") result = num1 / num2;

    setDisplay(String(parseFloat(result.toFixed(10))));
    setOperator("");
    setFirstNumber("");
  };

  const handleTheme = function (themeNumber) {
    setTheme(themeNumber);
  };

  return (
    <div className={`app theme-${theme}`}>
      <div className="calculator">
        <Header theme={theme} handleTheme={handleTheme} />
        <Display display={display} />
        <Keypad
          handleNumber={handleNumber}
          handleOperator={handleOperator}
          handleDelete={handleDelete}
          handleReset={handleReset}
          handleEquals={handleEquals}
          handleDot={handleDot}
        />
      </div>
    </div>
  );
}

function Header({ theme, handleTheme }) {
  return (
    <div className="header">
      <h1 className="logo">calc</h1>

      <div className="theme-toggle">
        <span className="theme-label">THEME</span>

        <div className="theme-switcher">
          <div className="theme-numbers">
            <span onClick={() => handleTheme(1)}>1</span>
            <span onClick={() => handleTheme(2)}>2</span>
            <span onClick={() => handleTheme(3)}>3</span>
          </div>

          <div className="toggle-track">
            <div
              className={`toggle-thumb toggle-thumb-${theme}`}
              onClick={() => {
                if (theme === 1) handleTheme(2);
                else if (theme === 2) handleTheme(3);
                else handleTheme(1);
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Display({ display }) {
  return (
    <div className="display">
      <input className="display-number" type="text" value={display} readOnly />
    </div>
  );
}

function Button({ children, type, onClick }) {
  return (
    <button className={`btn btn-${type}`} onClick={onClick}>
      {children}
    </button>
  );
}

function Keypad({
  handleDelete,
  handleEquals,
  handleDot,
  handleNumber,
  handleOperator,
  handleReset,
}) {
  return (
    <div className="keypad">
      <Button type="number" onClick={() => handleNumber("7")}>
        7
      </Button>
      <Button type="number" onClick={() => handleNumber("8")}>
        8
      </Button>
      <Button type="number" onClick={() => handleNumber("9")}>
        9
      </Button>
      <Button type="del" onClick={handleDelete}>
        DEL
      </Button>

      <Button type="number" onClick={() => handleNumber("4")}>
        4
      </Button>
      <Button type="number" onClick={() => handleNumber("5")}>
        5
      </Button>
      <Button type="number" onClick={() => handleNumber("6")}>
        6
      </Button>
      <Button type="operator" onClick={() => handleOperator("+")}>
        +
      </Button>

      <Button type="number" onClick={() => handleNumber("1")}>
        1
      </Button>
      <Button type="number" onClick={() => handleNumber("2")}>
        2
      </Button>
      <Button type="number" onClick={() => handleNumber("3")}>
        3
      </Button>
      <Button type="operator" onClick={() => handleOperator("-")}>
        -
      </Button>

      <Button type="operator" onClick={handleDot}>
        .
      </Button>
      <Button type="number" onClick={() => handleNumber("0")}>
        0
      </Button>
      <Button type="operator" onClick={() => handleOperator("/")}>
        /
      </Button>
      <Button type="operator" onClick={() => handleOperator("x")}>
        x
      </Button>

      <Button type="reset" onClick={handleReset}>
        RESET
      </Button>
      <Button type="equals" onClick={handleEquals}>
        =
      </Button>
    </div>
  );
}
