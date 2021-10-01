import { useState, useContext, useRef, useEffect } from "react";
import { Context } from "./Context.js";
import { Header, Footer } from "./HeaderFooter";
import DisplayMatrix from "./DisplayMatrix";

function SetObsScreen() {
  const [context, setContext] = useContext(Context);
  const [matrixReady, SetMatrixReady] = useState(0);
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const newNums = context.allNums;
  let obs = parseInt(context.obs);
  let displayArray = context.displayArray;
  let x = 0;

  const createMatrix = (row, col) => {
    x = 0;
    return (
      <div>
        <div> Click to set Obstacles</div>
        <DisplayMatrix buttonDisabled={false} />
      </div>
    );
  };

  const renderMatrix = () => {
    //TO DO with dynamic row and col
    SetMatrixReady(1);
  };
  return (
    <div>
      <Header message="Set Obstacles" />
      <div style={{ justifyContent: "space-between" }}>
        ROW:{context.rows}
        COL:{context.cols}
        OBS:{context.obs}
        <button onClick={renderMatrix}>Render Matrix</button>
        <div>
          <div>{matrixReady && createMatrix(context.rows, context.cols)}</div>
        </div>
      </div>
      <div>
       
        <button
          onClick={() => {
            setContext({
              ...context,
              step: 1,
            });
          }}
        >
          Back
        </button>
        <button
       
          onClick={() => {
            setContext({
              ...context,
              step: 3,
              allNums: newNums,
            });
           
          }}
        >
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default SetObsScreen;
