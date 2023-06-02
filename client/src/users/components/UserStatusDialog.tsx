import React, { FC } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useParams } from "react-router-dom";

type Props = {
  isDialogOpen: boolean;
  onStatus: (userId?: string) => void;
  onChangeDialog: (term?: string) => void;
};

const UserStatusDialog: FC<Props> = ({
  isDialogOpen,
  onStatus,
  onChangeDialog,
}) => {
  const { userId } = useParams();
  return (
    <Dialog
      open={isDialogOpen}
      onClose={() => onChangeDialog()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="xs"
    >
      <DialogTitle id="alert-dialog-title">
        {"Are you sure you want to change status of this user?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This operation will change the business status of the user. are you
          sure to perform the action?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onChangeDialog()} color="error">
          cancel
        </Button>
        <Button onClick={() => onStatus(userId)} autoFocus color="info">
          Change Status
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserStatusDialog;
