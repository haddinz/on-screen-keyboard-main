import React, { useState } from "react";
import "./Qwerty.css";

function Qwerty() {
  let [enterValue, setEnterValue] = useState("");
  let [capslockValue, setCapslockValue] = useState(false);
  let [shiftValue, setShiftValue] = useState(false);
  let charToAppend = "";
  const [styleC, setStyleC] = useState("dark");
  const [style, setStyle] = useState("dark");

  function changeShiftButtonColor() {
    setStyle((prevStyle) => (prevStyle === "light" ? "dark" : "light"));
  }

  function changeCapslockButtonColor() {
    setStyleC((prevStyleC) => (prevStyleC === "light" ? "dark" : "light"));
  }

  const buttonMapping = {
    backtick: ["`", "~", "`"],
    1: ["1", "!", "1"],
    2: ["2", "@", "2"],
    3: ["3", "#", "3"],
    4: ["4", "$", "4"],
    5: ["5", "%", "5"],
    6: ["6", "^", "6"],
    7: ["7", "&", "7"],
    8: ["8", "*", "8"],
    9: ["9", "(", "9"],
    0: ["0", ")", "0"],
    "-": ["-", "_", "-"],
    "=": ["=", "+", "="],
    q: ["q", "Q", "Q"],
    w: ["w", "W", "W"],
    e: ["e", "E", "E"],
    r: ["r", "R", "R"],
    t: ["t", "T", "T"],
    y: ["y", "Y", "Y"],
    u: ["u", "U", "U"],
    i: ["i", "I", "I"],
    o: ["o", "O", "O"],
    p: ["p", "P", "P"],
    "[": ["[", "{", "["],
    "]": ["]", "}", "]"],
    "\\": ["\\", "|", "\\"],
    a: ["a", "A", "A"],
    s: ["s", "S", "S"],
    d: ["d", "D", "D"],
    f: ["f", "F", "F"],
    g: ["g", "G", "G"],
    h: ["h", "H", "H"],
    j: ["j", "J", "J"],
    k: ["k", "K", "K"],
    l: ["l", "L", "L"],
    ";": [";", ":", ";"],
    "'": ["'", '"', "'"],
    z: ["z", "Z", "Z"],
    x: ["x", "X", "X"],
    c: ["c", "C", "C"],
    v: ["v", "V", "V"],
    b: ["b", "B", "B"],
    n: ["n", "N", "N"],
    m: ["m", "M", "M"],
    ",": [",", "<", ","],
    ".": [".", ">", "."],
    "/": ["/", "?", "/"],
    spacebar: [" ", " ", " "],
  };

  function handleButtonClick(value) {
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
  }
  return (
    <>
      <div className="textbox">
        <input type="text" value={enterValue}></input>
      </div>
      <div className="numbers">
        <div className="nonalphanumeric">
          <button className="backtick" onClick={() => handleButtonClick("`")}>
            <sup>~ </sup>`
          </button>
        </div>
        <div>
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
        <div className="nonalphanumeric">
          <button onClick={() => handleButtonClick("-")}>
            <sup>_ </sup>-
          </button>
          <button onClick={() => handleButtonClick("=")}>
            <sup>+ </sup>=
          </button>
          <button
            className="backspace"
            onClick={() => handleButtonClick("backspace")}
          >
            Backspace
          </button>
        </div>
      </div>
      <div className="qwerty">
        <div className="nonalphanumeric">
          <button className="tab" onClick={() => handleButtonClick("1")}>
            Tab
          </button>
        </div>
        <div className="alphanumeric">
          <button onClick={() => handleButtonClick("q")}>Q</button>
          <button onClick={() => handleButtonClick("w")}>W</button>
          <button onClick={() => handleButtonClick("e")}>E</button>
          <button onClick={() => handleButtonClick("r")}>R</button>
          <button onClick={() => handleButtonClick("t")}>T</button>
          <button onClick={() => handleButtonClick("y")}>Y</button>
          <button onClick={() => handleButtonClick("u")}>U</button>
          <button onClick={() => handleButtonClick("i")}>I</button>
          <button onClick={() => handleButtonClick("o")}>O</button>
          <button onClick={() => handleButtonClick("p")}>P</button>
        </div>
        <div className="nonalphanumeric">
          <button onClick={() => handleButtonClick("{")}>
            <sup>{"{"} </sup>
            {"["}
          </button>
          <button onClick={() => handleButtonClick("}")}>
            <sup>{"}"} </sup>
            {"]"}
          </button>
          <button onClick={() => handleButtonClick("\\")}>
            <sup>| </sup>\
          </button>
        </div>
      </div>
      <div className="asdfg">
        <div>
          <button
            className={`${styleC} capsl`}
            onClick={() => {
              handleButtonClick("caps");
              changeCapslockButtonColor();
            }}
          >
            CapsLock
          </button>
        </div>
        <div className="alphanumeric">
          <button onClick={() => handleButtonClick("a")}>A</button>
          <button onClick={() => handleButtonClick("s")}>S</button>
          <button onClick={() => handleButtonClick("d")}>D</button>
          <button onClick={() => handleButtonClick("f")}>F</button>
          <button onClick={() => handleButtonClick("g")}>G</button>
          <button onClick={() => handleButtonClick("h")}>H</button>
          <button onClick={() => handleButtonClick("j")}>J</button>
          <button onClick={() => handleButtonClick("k")}>K</button>
          <button onClick={() => handleButtonClick("l")}>L</button>
        </div>
        <div className="nonalphanumeric">
          <button onClick={() => handleButtonClick(";")}>
            <sup>: </sup>;
          </button>
          <button onClick={() => handleButtonClick("'")}>
            <sup>" </sup>'
          </button>
          <button className="enter" onClick={() => handleButtonClick("enter")}>
            Enter
          </button>
        </div>
      </div>
      <div className="zxcvb">
        <div className="nonalphanumeric">
          <button
            className={`${style} shift l`}
            onClick={() => {
              handleButtonClick("shift");
              changeShiftButtonColor();
            }}
          >
            Shift
          </button>
        </div>
        <div className="alphanumeric">
          <button onClick={() => handleButtonClick("z")}>Z</button>
          <button onClick={() => handleButtonClick("x")}>X</button>
          <button onClick={() => handleButtonClick("c")}>C</button>
          <button onClick={() => handleButtonClick("v")}>V</button>
          <button onClick={() => handleButtonClick("b")}>B</button>
          <button onClick={() => handleButtonClick("n")}>N</button>
          <button onClick={() => handleButtonClick("m")}>M</button>
        </div>
        <div className="nonalphanumeric">
          <button onClick={() => handleButtonClick(",")}>
            <sup>{"<"} </sup>,
          </button>
          <button onClick={() => handleButtonClick(".")}>
            <sup>{">"} </sup>.
          </button>
          <button onClick={() => handleButtonClick("/")}>
            <sup>? </sup>/
          </button>
          <button
            className={`${style} shift r`}
            onClick={() => {
              handleButtonClick("shift");
              changeShiftButtonColor();
            }}
          >
            Shift
          </button>
        </div>
      </div>
      <div className="sb">
        <button
          className="spacebar"
          onClick={() => handleButtonClick("spacebar")}
        ></button>
      </div>
    </>
  );
}

export default Qwerty;
