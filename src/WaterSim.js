import { useState, useContext } from "react";
import { Context } from "./Context.js";
import { Header, Footer } from "./HeaderFooter";

function WaterSim() {
  const [context, setContext] = useContext(Context);
  console.log(context.newArray, context.cols);
  let cols = parseInt(context.cols);
  let rows = parseInt(context.rows);
  let displayArray = context.displayArray;
  let allNums = context.allNums;
  let blueColorArray = context.blueColorArray;
  let waterArray = context.waterArray;
  console.log(waterArray);
  let w = 0;

  console.log("allNums after: ", allNums);

  return (
    <div>
      <Header message="Water Simulator" />
      <div>
        {waterArray.map((row1, rowIndex) => {
          return (
            <div>
              {row1.map((col1, colIndex) => {
                w = parseInt(String(rowIndex) + String(colIndex));
                return (
                  <button
                    className="flip-box-inner"
                    style={
                      blueColorArray.includes(w)
                        ? { backgroundColor: "blue" }
                        : allNums.includes(w)
                        ? { backgroundColor: "lightblue" }
                        : { backgroundColor: "pink" }
                     
                    }
                    key={w}
                  >
                   
                  </button>
                );
              })}
            </div>
          );
        })}
      
      </div>
      <div></div>
      <Footer />
    </div>
  );
}
export default WaterSim;
