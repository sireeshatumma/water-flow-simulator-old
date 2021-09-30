import { useState, useContext, useRef, useEffect } from "react";
import { Context } from "./Context.js";
function DisplayMatrix(props) {
  const [context, setContext] = useContext(Context);
  const [buttonDisabled, setButtonDisabled] = useState(props.buttonDisabled);
  const newNums = context.allNums;
  let obs = parseInt(context.obs);
  console.log("step:" + context.step, context.page);
  let displayArray = context.displayArray;
  let x = 0;

  return displayArray.map((row1, rowIndex) => {
    return (
      <div>
        {row1.map((col1, colIndex) => {
          x = parseInt(String(rowIndex) + String(colIndex));
          return (
            <button
              disabled={buttonDisabled}
              style={
                newNums.includes(x)
                  ? { backgroundColor: "lightblue" }
                  : { backgroundColor: "pink" }
              }
              className="flip-box-inner"
              key={x}
              onClick={() => {
                obs = obs - 1;
                console.log("obs ", obs);
                if (obs == 0) {
                  setButtonDisabled(true);
                }
                let num = parseInt(String(rowIndex) + String(colIndex));
                if (newNums.includes(num)) {
                  newNums.splice(newNums.indexOf(num), 1);
                }
                setContext({
                  ...context,
                  allNums: newNums,
                  obs: obs,
                });
              }}
            >
              {x}
            </button>
          );
        })}
      </div>
    );
  });
}
export default DisplayMatrix;
