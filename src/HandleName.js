import React from "react";

export const HandleName = ({ handleName }) => {
  
  return (
    <button  onClick={(e) => handleName(e)}>
      Click Me
    </button>
  );
};
