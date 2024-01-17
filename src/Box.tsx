import React from 'react'

const Box = ({
  value,
  onClick,
  disable
}:{
  value: string,
  onClick: () => void,
  disable: boolean
}) => {
  return <button disabled={disable} className="BoxContainer" onClick={onClick}>{value}</button>;
}


export default Box