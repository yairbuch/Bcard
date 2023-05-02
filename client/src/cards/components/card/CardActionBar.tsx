import React from "react";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/Call";

type Props = {
  onDelete: (id: string) => void;
  cardId: string;
  onLike: (id: string) => void;
};
const CardActionBar: React.FC<Props> = ({ onDelete, cardId, onLike }) => {
  const handleEditCard = () =>
    console.log(`you moved to edit card no: ${cardId} component`);

  return (
    <>
      <CardActions
        disableSpacing
        sx={{ pt: 0, justifyContent: "space-between" }}
      >
        <Box>
          <IconButton onClick={() => onDelete(cardId)} aria-label="delete card">
            <DeleteIcon />
          </IconButton>

          <IconButton onClick={handleEditCard} aria-label="edit card">
            <EditIcon />
          </IconButton>
        </Box>

        <Box>
          <IconButton aria-label="call business">
            <CallIcon />
          </IconButton>
          <IconButton onClick={() => onLike(cardId)} aria-label="add to fav">
            <FavoriteIcon />
          </IconButton>
        </Box>
      </CardActions>
    </>
  );
};

export default CardActionBar;
