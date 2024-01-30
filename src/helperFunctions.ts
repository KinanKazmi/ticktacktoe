export const winningConditions = (newBoxes: string[]) => {
  if (newBoxes[0] !== '' ) {
    if (newBoxes[0] === newBoxes[1] && newBoxes[1] === newBoxes[2]) {
      return true;
    }
  }
 
  if (newBoxes[3] !== '' ) {
    if (newBoxes[3] === newBoxes[4] && newBoxes[4] === newBoxes[5]) {
      return true;
    }
  }

  if (newBoxes[6] !== '' ) {
    if (newBoxes[6] === newBoxes[7] && newBoxes[7] === newBoxes[8]) {
      return true;
    }
  }

  if (newBoxes[0] !== '' ) {
    if (newBoxes[0] === newBoxes[4] && newBoxes[4] === newBoxes[8]) {
      return true;
    }
  }

  if (newBoxes[2] !== '' ) {
    if (newBoxes[2] === newBoxes[4] && newBoxes[4] === newBoxes[6]) {
      return true;
    }
  }

  if (newBoxes[0] !== '' ) {
    if (newBoxes[0] === newBoxes[3] && newBoxes[3] === newBoxes[6]) {
      return true;
    }
  }

  if (newBoxes[1] !== '' ) {
    if (newBoxes[1] === newBoxes[4] && newBoxes[4] === newBoxes[7]) {
      return true;
    }
  }

  if (newBoxes[2] !== '' ) {
    if (newBoxes[2] === newBoxes[5] && newBoxes[5] === newBoxes[8]) {
      return true;
    }
  }

};