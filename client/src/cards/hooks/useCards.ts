import { useState } from "react";
import CardInterface from "../interfaces-20230423T085937Z-001/interfaces/CardInterface";
import {
  changeLikeStatus,
  createCard,
  deleteCard,
  editCard,
  getCard,
  getCards,
  getMyCards,
} from "../services/cardApi";

type ErrorType = null | string;
type CardsType = null | CardInterface[];

const useCards = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorType>(null);
  const [cards, setCards] = useState<CardsType>(null);
  const [card, setCard] = useState<CardsType>(null);

  const requestStatus = (
    loading: boolean,
    errorMessage: ErrorType,
    cards: CardsType,
    card: CardsType = null
  ) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

  const handleGetCards = async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      requestStatus(false, null, cards);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  };

  const handleGetCard = async (cardId: string) => {
    try {
      setLoading(false);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
      return card;
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  };

  const handleGetMyCards = async () => {
    try {
      setLoading(false);
      const cards = await getMyCards();
      requestStatus(false, null, cards);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  };

  const handleCreateCard = async (cardFromClient: CardInterface[]) => {
    try {
      setLoading(false);
      const card = await createCard(cardFromClient);
      requestStatus(false, null, null, card);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  };

  const handleUpdateCard = async (cardFromClient: CardInterface[]) => {
    try {
      setLoading(false);
      const card = await editCard(cardFromClient);
      requestStatus(false, null, null, card);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  };

  const handleDeleteCard = async (cardId: string) => {
    try {
      setLoading(false);
      deleteCard(cardId);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  };

  const handleLikeCard = async (cardId: string) => {
    try {
      setLoading(false);
      const card = await changeLikeStatus(cardId);
      const cards = await getCards();
      requestStatus(false, null, cards, card);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  };

  return {
    isLoading,
    error,
    cards,
    card,
    handleGetCards,
    handleGetCard,
    handleGetMyCards,
    handleCreateCard,
    handleUpdateCard,
    handleDeleteCard,
    handleLikeCard,
  };
};

export default useCards;
