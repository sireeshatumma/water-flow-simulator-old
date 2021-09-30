import { useState, useContext } from "react";
import React from "react";
import { Context } from "./Context.js";
import "./App.css";
import { Header, Footer } from "./HeaderFooter";

function SelectScreen() {
  const [context, setContext] = useContext(Context);

  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [obs, setObs] = useState(0);
  let displayArray = [];
  let allNums = [];
  const handleClick = () => {
    displayArray = Array(parseInt(rows))
      .fill(0)
      .map((row1) => new Array(parseInt(cols)).fill(0));
    let x = 0;

    displayArray.map((row1, rowIndex) => {
      row1.map((col1, colIndex) => {
        x = parseInt(String(rowIndex) + String(colIndex));
        allNums.push(x);
      });
    });
    setContext({
      ...context,
      step: 2,
      rows,
      cols,
      obs,
      page: 1,
      displayArray,
      allNums,
    });
  };
  return (
    <div className="fullscreen">
      <Header message="Water Simulator" />

      <div className="sub-step1"></div>

      <div className="center">
        <div className="rowBox">
          Rows : {rows}
          <input
            type="range"
            value={rows}
            min="0"
            max="10"
            step="1"
            onChange={(event) => {
              setRows(event.target.value);
            }}
          />
        </div>
        <div className="rowBox">
          Columns : {cols}
          <input
            type="range"
            value={cols}
            min="0"
            max="10"
            step="1"
            onChange={(event) => {
              setCols(event.target.value);
            }}
          />
        </div>
        <div className="rowBox">
          Obstructions : {obs}
          <input
            type="range"
            value={obs}
            min="0"
            max="5"
            step="1"
            onChange={(event) => {
              setObs(event.target.value);
            }}
          />
        </div>
        <div className="sub-step1"></div>
        <div className="rowBox">
          <button onClick={handleClick}>Submit</button>
        </div>
      </div>

      <Footer message="" />
    </div>
  );
}

export default SelectScreen;
