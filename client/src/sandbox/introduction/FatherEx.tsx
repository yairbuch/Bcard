import React from "react";
import ChildEx from "./ChildEx";

const FatherEx = () => {
  const design = {
    backgroundColor: "red",
    width: "300px",
    height: "300px",
    margin: "auto",
  };
  const newColor = (color: string) => (design.backgroundColor = color);
  return (
    <>
      <div style={design} className="center">
        <ChildEx changeColor={newColor} color={"blue"} />
      </div>
    </>
  );
};

export default FatherEx;
