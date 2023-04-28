import React from "react";
import MuiCard from "@mui/material/Card";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardInterface from "../../interfaces-20230423T085937Z-001/interfaces/CardInterface";
import CardActionBar from "./CardActionBar";

type Props = {
  card: CardInterface;
  onDelete: (id: string) => void;
  cardId: string;
  onLike: (id: string) => void;
  onEdit: (id: string) => void;
};
const Card: React.FC<Props> = ({ card, onDelete, cardId, onLike, onEdit }) => {
  return (
    <MuiCard sx={{ minWidth: 280 }}>
      <CardHead image={card.image} />

      <CardBody card={card} />

      <CardActionBar
        onLike={() => onLike(cardId)}
        onDelete={() => onDelete(cardId)}
        onEdit={() => onEdit(cardId)}
        cardId={card._id}
      />
    </MuiCard>
  );
};

export default Card;
