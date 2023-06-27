import React, { useState, useEffect } from "react";
import { Box, IconButton } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CallIcon from "@mui/icons-material/Call";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useUser } from "../../../users/providers/UserProvider";
import CardDeleteDialog from "./CardDeleteDialog";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";
import useCards from "../../hooks/useCards";

type CardActionBarProps = {
  cardId: string;
  cardUserId: string;
  onDelete: (id: string) => void;
  onLike: () => void;
  cardLikes: string[];
};

const CardActionBar = ({
  cardId,
  cardUserId,
  onDelete,
  cardLikes,
  onLike,
}: CardActionBarProps) => {
  const [isDialogOpen, setDialog] = useState(false);
  const navigate = useNavigate();
  const { user } = useUser();

  const { handleLikeCard } = useCards();

  const [isLiked, setLiked] = useState<boolean | void>(() => {
    if (!user) return false;
    Boolean(cardLikes.find((id) => id === user?._id));
  });

  const handleLike = async () => {
    setLiked((prev) => !prev);
    await handleLikeCard(cardId);
    onLike();
  };

  const handleDialog = (term?: string) => {
    if (term === "open") return setDialog(true);
    setDialog(false);
  };

  const handleDeleteCard = () => {
    handleDialog();
    onDelete(cardId);
  };

  // useEffect(() => {
  //   return () => {
  //     setLiked(isLiked);
  //   };
  // }, []);
  return (
    <>
      <CardActions
        disableSpacing
        sx={{ pt: 0, justifyContent: "space-between" }}
      >
        <Box>
          {user && (user?._id === cardUserId || user.isAdmin) && (
            <IconButton
              aria-label="delete card"
              onClick={() => handleDialog("open")}
            >
              <DeleteIcon />
            </IconButton>
          )}

          {user?._id === cardUserId && (
            <IconButton
              aria-label="edit card"
              onClick={() => navigate(`${ROUTES.CARD_EDIT}/${cardId}`)}
            >
              <EditIcon />
            </IconButton>
          )}
        </Box>

        <Box>
          {user && (
            <IconButton aria-label="call business">
              <CallIcon />
            </IconButton>
          )}

          {user && (
            <IconButton
              aria-label="add to fav"
              onClick={handleLike}
              color={
                cardLikes.includes(user._id) || isLiked ? "error" : "default"
              }
            >
              <FavoriteIcon />
            </IconButton>
          )}
        </Box>
      </CardActions>
      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={handleDialog}
        onDelete={handleDeleteCard}
      />
    </>
  );
};

export default React.memo(CardActionBar);
