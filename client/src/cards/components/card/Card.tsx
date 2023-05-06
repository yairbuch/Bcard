import React from "react";
import MuiCard from "@mui/material/Card";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardInterface from "../../interfaces-20230423T085937Z-001/interfaces/CardInterface";
import CardActionBar from "./CardActionBar";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routes/routesModel";


type Props = {
  card: CardInterface;
  onDelete: (id: string) => void;
};
const Card: React.FC<Props> = ({ card, onDelete}) => {
  const navigate = useNavigate()
  
  return (
    <MuiCard sx={{ minWidth: 280 }}>

      <CardActionArea onClick={()=>navigate(`${ROUTES.CARD_DETAILS}/${card._id}`)}>
      <CardHead image={card.image} />
      <CardBody card={card} />
      </CardActionArea>

      <CardActionBar onDelete={onDelete} cardId={card._id}
      />
    </MuiCard>
  );
};

export default Card;
