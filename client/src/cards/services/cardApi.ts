import axios, { isAxiosError } from "axios";
import CardInterface from "../interfaces-20230423T085937Z-001/interfaces/CardInterface";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

export const getCards = async () => {
  try {
    const { data } = await axios.get<CardInterface[]>(`${apiUrl}/cards`);
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const getCard = async (cardid: string) => {
  try {
    const { data } = await axios.get<CardInterface[]>(`${apiUrl}/cards/:id`);
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const getMyCards = async () => {
  try {
    const { data } = await axios.get<CardInterface[]>(
      `${apiUrl}/cards/my-cards`
    );
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const createCard = async (card: CardInterface[]) => {
  try {
    const { data } = await axios.post<CardInterface[]>(
      `${apiUrl}/cards/`,
      card
    );
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const editCard = async (card: CardInterface[]) => {
  try {
    const { data } = await axios.put<CardInterface[]>(
      `${apiUrl}/cards/:id`,
      card
    );
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const changeLikeStatus = async (cardId: string) => {
  try {
    const { data } = await axios.patch(`${apiUrl}/cards/:id`);
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const deleteCard = async (cardId: string) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/cards/:id`);
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};
