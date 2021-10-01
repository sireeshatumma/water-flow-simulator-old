import { useState, useContext } from "react";
import { Context } from "./Context.js";
import DisplayMatrix from "./DisplayMatrix.js";
import { Header, Footer } from "./HeaderFooter";

function WaterFlow() {
  const [context, setContext] = useContext(Context);
  let cols = parseInt(context.cols);
  let waterArray = Array(1)
    .fill(0)
    .map((row1) => new Array(cols).fill(0));
  let x = 0;
  let w = 0;
  return (
    <div>
      <Header message="Select Water block" />
      <div>
        {waterArray.map((row1, rowIndex) => {
          console.log("rowIndex: " + rowIndex);
          return (
            <div>
              {row1.map((col1, colIndex) => {
                w = parseInt(String(rowIndex) + String(colIndex));
                console.log(rowIndex, colIndex);
                return (
                  <button
                    className="flip-box-inner"
                    style={{ backgroundColor: "blue" }}
                    key={w}
                    onClick={() => {
                      w = parseInt(String(rowIndex) + String(colIndex));
                      setContext({
                        ...context,
                        waterClick: w,
                        step: 4,
                      });
                    }}
                  >
                    
                  </button>
                );
              })}
            </div>
          );
        })}
        <DisplayMatrix buttonDisabled={true} />
      </div>
      <div>
        <button
          onClick={() => {
            setContext({
              ...context,
              step: 2,
            });
          }}
        >
          Back
        </button>     
      </div>
      <Footer />
    </div>
  );
}
export default WaterFlow;
