import React, { useState } from "react";
import "./App.css";
import "./BoxContainer.css";
import "./MainContainer.css";
import Box from "./Box";
import { winningConditions } from "./helperFunctions";

function App() {
  const [boxes, setBoxes] = useState((new Array(9)).fill('')); // ['','','','','','','','','','']
  const [bari, setBari] = useState('X');
  const [disable, setDisable] = useState(false);
  
  const boxClick = (index: number) => { 
    const newBoxes = [...boxes];
    if (newBoxes[index] !== '') return;
    newBoxes[index] = bari;
    setBoxes(newBoxes);
    const userWon = winningConditions(newBoxes);
    if (userWon) {
      setDisable(true);
    } else {
      setBari(bari === 'X' ? 'O' : 'X')
    }
  }
  
  return (
    <div className="App">
      <div className="MainContainer">
        {boxes.map((ele, index) => <Box
          key={index.toString()}
          disable={disable} 
          value={ele}
          onClick={() => boxClick(index)}
        />)}
      </div>
    </div>
  );
}

export default App;
