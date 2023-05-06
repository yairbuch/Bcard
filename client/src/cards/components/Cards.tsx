import React from "react";
import Typography from "@mui/material/Typography";
import CardInterface from "./../interfaces-20230423T085937Z-001/interfaces/CardInterface";
import Card from "./card/Card";
import Grid from "@mui/material/Grid";

type Props = {
  cards: CardInterface[];
};

const Cards: React.FC<Props> = ({ cards }) => {
  const handleDelete = (id: string) =>
    console.log(`You clicked card no: ${id}`);

  if (!cards.length)
    return (
      <Typography>
        Opss... it seems that there are no business cards to display...
      </Typography>
    );

  return (
    <Grid container spacing={2} pb={2}>
      {cards.map((card: CardInterface) => (
        <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
          <Card onDelete={handleDelete} card={card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;

