import React, { useEffect, useCallback } from "react";
import Container from "@mui/material/Container";
import CardsFeedback from "../components/CardsFeedback";
import PageHeader from "../../components/PageHeader";
import useCards from "../hooks/useCards";

type CardsPageProps = {};

const CardsPage: React.FC<CardsPageProps> = () => {
  const { value, handleGetCards, handleDeleteCard } = useCards();
  const { error, isLoading, filteredCards } = value;

  useEffect(() => {
    handleGetCards();
  }, []);

  const onDeleteCard = async (cardId: string) => {
    await handleDeleteCard(cardId);
    await handleGetCards();
  };

  const onLikeCard = async () => {};
  return (
    <Container>
      <PageHeader
        title="Cards Page"
        subtitle="On this page you can find all business cards form all categories"
      />
      <CardsFeedback
        cards={filteredCards}
        error={error}
        isLoading={isLoading}
        onDelete={onDeleteCard}
        onLike={onLikeCard}
      />
    </Container>
  );
};

export default CardsPage;
