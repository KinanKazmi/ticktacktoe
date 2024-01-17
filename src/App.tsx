import React, { useState } from "react";
import "./App.css";
import "./BoxContainer.css";
import "./MainContainer.css";
import Box from "./Box";

function App() {
  const [boxes, setBoxes] = useState((new Array(9)).fill('')); // ['','','','','','','','','','']
  const [bari, setBari] = useState('X');
  const [disable, setDisable] = useState(false);
  
  const checkWin = (newBoxes: string[]) => {
    if (newBoxes[0] !== '' ) {
      if (newBoxes[0] === newBoxes[1] && newBoxes[1] === newBoxes[2]) {
        setDisable(true);
        return alert('winner is ' + bari);
      }
    }
    setBari(bari === 'X' ? 'O' : 'X');
  }
  const boxClick = (index: number) => { 
    const newBoxes = [...boxes];
    if (newBoxes[index] !== '') return;
    newBoxes[index] = bari;
    setBoxes(newBoxes);
    checkWin(newBoxes);
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
