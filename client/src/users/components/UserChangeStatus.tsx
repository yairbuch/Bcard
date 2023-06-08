import React, { FC } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

type Props = {
  isDialogOpen: boolean;
  onChangeStatus: (/* userId: string | undefined */) => void;
  onChangeDialog: (term?: string) => void;
};

const UserChangeStatus: FC<Props> = ({
  isDialogOpen,
  onChangeStatus,
  onChangeDialog,
}) => {
  return (
    <Dialog
      open={isDialogOpen}
      onClose={() => onChangeDialog()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="xs"
    >
      <DialogTitle id="alert-dialog-title">
        {"Are you sure you want to change this user?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This operation will completely delete the user from the database and
          it will not be possible to retrieve the user afterwards
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onChangeDialog()} color="error">
          cancel
        </Button>
        <Button
          onClick={/* () => */ onChangeStatus /* ("") */}
          autoFocus
          color="info"
        >
          change user status
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UserChangeStatus;
