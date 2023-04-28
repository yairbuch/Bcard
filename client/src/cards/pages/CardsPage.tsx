import React from "react";
import PageHeader from "../../components/PageHeader";
import Cards from "../components/Cards";
import CardInterface from "./../interfaces-20230423T085937Z-001/interfaces/CardInterface";

const CardsPage = () => {
  let cards: CardInterface[] = [
    {
      _id: "abcd1",
      title: "One",
      subtitle: "Card Subtitle",
      description: "the card description",
      phone: "050-000000",
      image: {
        url: "https://cdn.pixabay.com/photo/2023/04/15/17/08/bernese-mountain-dog-7928156_640.jpg",
        alt: "test",
      },
      web: "",
      address: {
        state: "",
        country: "israel",
        city: "tel-aviv",
        street: "nahson",
        houseNumber: 5,
        zip: 1234,
      },
      bizNumber: 1000000,
      email: "test@gmail.com",
      likes: [],
      user_id: "123456789",
      createdAt: new Date(),
    },
    {
      _id: "abcd2",
      title: "Two",
      subtitle: "Card Subtitle",
      description: "the card description",
      phone: "050-000000",
      image: {
        url: "https://cdn.pixabay.com/photo/2023/04/15/17/08/bernese-mountain-dog-7928156_640.jpg",
        alt: "test",
      },
      web: "",
      address: {
        state: "",
        country: "israel",
        city: "tel-aviv",
        street: "nahson",
        houseNumber: 5,
        zip: 1234,
      },
      bizNumber: 1000000,
      email: "test@gmail.com",
      likes: [],
      user_id: "123456789",
      createdAt: new Date(),
    },
    {
      _id: "abcd3",
      title: "Three",
      subtitle: "Card Subtitle",
      description: "the card description",
      phone: "050-000000",
      image: {
        url: "https://cdn.pixabay.com/photo/2023/04/15/17/08/bernese-mountain-dog-7928156_640.jpg",
        alt: "test",
      },
      web: "",
      address: {
        state: "",
        country: "israel",
        city: "tel-aviv",
        street: "nahson",
        houseNumber: 5,
        zip: 1234,
      },
      bizNumber: 1000000,
      email: "test@gmail.com",
      likes: [],
      user_id: "123456789",
      createdAt: new Date(),
    },
  ];
  return (
    <>
      <PageHeader
        title=" Cards Page"
        subtitle="Here you can find all types of business cards"
      />
      <Cards cards={cards} />
    </>
  );
};

export default CardsPage;
