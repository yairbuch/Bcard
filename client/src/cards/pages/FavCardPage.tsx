import { Container } from "@mui/system";
import React, { useCallback, useEffect } from "react";
// import { useParams } from "react-router-dom";
import CardsFeedback from "../components/CardsFeedback";
import useCards from "../hooks/useCards";
import PageHeader from "../../components/PageHeader";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../../users/providers/UserProvider";

const FavCardPage = () => {
  const { value, ...rest } = useCards();
  const { isLoading, cards, error, filteredCards } = value;
  const { handleGetFavCards, handleDeleteCard, handleGetCards } = rest;

  useEffect(() => {
    handleGetFavCards();
  }, []);

  const onDeleteCard = useCallback(
    async (cardId: string) => {
      await handleDeleteCard(cardId);
      await handleGetCards();
    },
    [handleDeleteCard]
  );

  const changeLikeStatus = useCallback(async () => {
    await handleGetFavCards();
  }, []);

  return (
    <Container>
      <PageHeader
        title="My Favorite Cards Page"
        subtitle="Here you can find your favorite business cards"
      />

      <CardsFeedback
        isLoading={isLoading}
        cards={filteredCards}
        error={error}
        onLike={changeLikeStatus}
        onDelete={onDeleteCard}
      />
    </Container>
  );
};

export default FavCardPage;
