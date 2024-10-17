import React, { useState } from "react";
import buttonMapping from "./libs/button.";

function Content() {
  let [enterValue, setEnterValue] = useState("");
  let [capslockValue, setCapslockValue] = useState(false);
  let [shiftValue, setShiftValue] = useState(false);

  let charToAppend = "";

  const [styleC, setStyleC] = useState("dark");
  const [style, setStyle] = useState("dark");

  const changeShiftButtonColor = () => {
    setStyle((prevStyle) => (prevStyle === "light" ? "dark" : "light"));
  };

  const changeCapslockButtonColor = () => {
    setStyleC((prevStyleC) => (prevStyleC === "light" ? "dark" : "light"));
  };

  const handleButtonClick = (value) => {
    switch (value) {
      case "backspace":
        setEnterValue((prevValue) => prevValue.slice(0, -1));
        break;
      case "caps":
        setCapslockValue(!capslockValue);
        break;
      case "tab":
        setEnterValue((prevValue) => prevValue + "    ");
        break;
      case "shift":
        setShiftValue(!shiftValue);
        break;
      case "spacebar":
        setEnterValue((prevValue) => prevValue + " ");
        break;
      default:
        const [primaryChar, secChar, Terchar] = buttonMapping[value];
        if (capslockValue === shiftValue) {
          charToAppend = primaryChar;
        } else if (capslockValue === true && shiftValue === false) {
          charToAppend = Terchar;
        } else {
          charToAppend = secChar;
        }
        setEnterValue((prevValue) => prevValue + charToAppend);
        break;
    }
  };

  return (
    <div>
      <div className="textbox">
        <input type="text" value={enterValue}></input>
      </div>

      <div className="first-row">
        <button onClick={() => handleButtonClick("1")}>
          <sup>! </sup>1
        </button>
        <button onClick={() => handleButtonClick("2")}>
          <sup>@ </sup>2
        </button>
        <button onClick={() => handleButtonClick("3")}>
          <sup># </sup>3
        </button>
        <button onClick={() => handleButtonClick("4")}>
          <sup>$ </sup>4
        </button>
        <button onClick={() => handleButtonClick("5")}>
          <sup>% </sup>5
        </button>
        <button onClick={() => handleButtonClick("6")}>
          <sup>^ </sup>6
        </button>
        <button onClick={() => handleButtonClick("7")}>
          <sup>& </sup>7
        </button>
        <button onClick={() => handleButtonClick("8")}>
          <sup>* </sup>8
        </button>
        <button onClick={() => handleButtonClick("9")}>
          <sup>{"("} </sup>9
        </button>
        <button onClick={() => handleButtonClick("0")}>
          <sup>{")"} </sup>0
        </button>
      </div>
    </div>
  );
}

export default Content;
