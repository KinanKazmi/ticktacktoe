import React, { useState } from "react";
import { PersonProps } from "./usePersonArray";

const MyButton = ({
  name,
  age
}: PersonProps) => {
  const [count, setCount] = useState<number>(0);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        <span style={{display: 'flex', flex: 1}}>
          My name is {name}
        </span>
        <span style={{display: 'flex', flex: 2}}>
          My age is {age}
        </span>
        <span style={{display: 'flex', flex: 1}}>
          count is {count}
        </span>
      </button>
    </div>
  );
};

export default MyButton;
