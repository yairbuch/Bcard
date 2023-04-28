import React from "react";
import Button from "@mui/material/Button";

type Props = {
  changeColor: (color: string) => void;
  color: string;
};

const ChildEx: React.FC<Props> = ({ changeColor, color }) => {
  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => changeColor(color)}
      >
        click me
      </Button>
    </>
  );
};

export default ChildEx;
