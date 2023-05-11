import React from "react";
import Error from "../../components/Error";
import Spinner from "../../components/Spinner";
import CardInterface from "../interfaces-20230423T085937Z-001/interfaces/CardInterface";
import Cards from "./Cards";
import Typography from "@mui/material/Typography";

type Props = {
  isLoading: boolean;
  error: string | null;
  cards: CardInterface[] | null;
};

const CardsFeedback: React.FC<Props> = ({ isLoading, error, cards }) => {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && cards.length) return <Cards cards={cards} />;
  if (cards && !cards.length)
    return (
      <Typography>
        Opss... it seems that there are no business cards to display...
      </Typography>
    );

  return <div>CardsFeedback works!</div>;
};

export default CardsFeedback;
