import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useHandleUser from "../hooks/useHandleUser";
import { useUser } from "../providers/UserProvider";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";

const ProfilePage = () => {
  const { handleGetUserInfo, value } = useHandleUser();
  const { userInfo, error, isLoading } = value;
  const { user } = useUser();
  const { userId } = useParams();

  useEffect(() => {
    if (userId) handleGetUserInfo(userId);
  }, []);

  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (!isLoading && !user) return <p>No user to display...</p>;

  if (!isLoading && user)
    return (
      <Container>
        <Typography
          variant="h3"
          color="darkgoldenrod"
          fontFamily={"fantasy"}
          textAlign={"center"}
          paddingTop={5}
          paddingBottom={4}
        >
          {" "}
          Profile
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            {userInfo?.image.url !==
            "https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_960_720.png" ? (
              <img
                src={userInfo?.image.url}
                alt={userInfo?.image.alt}
                className="responsive-image"
              />
            ) : (
              // eslint-disable-next-line jsx-a11y/img-redundant-alt
              <img
                src={
                  "https://cdn.pixabay.com/photo/2017/09/10/18/25/question-2736480_640.jpg"
                }
                alt="No Profile picture avialable"
                className="responsive-image"
              />
            )}
          </Grid>
          <Grid
            item
            alignSelf="center"
            textAlign={"center"}
            lineHeight="2"
            xs={12}
            sm={6}
            md={6}
            lg={6}
          >
            {" "}
            <Typography
              variant="h4"
              color="blue"
              fontFamily={"fantasy"}
              paddingBottom={2}
            >
              {` ${userInfo?.name.first} ${userInfo?.name.last}`}
            </Typography>
            {`Email: ${userInfo?.email}`} <br />
            {`Phone: ${userInfo?.phone}`} <br />
            {`Address: ${userInfo?.address.street} ${userInfo?.address.houseNumber}, ${userInfo?.address.city}`}{" "}
            <br />
            {userInfo?.isBusiness ? `Status: Business` : "Status: Regular"}{" "}
            <br />
            <br />
          </Grid>
        </Grid>
      </Container>
    );
  return null;
};

export default ProfilePage;

//  {
//       "title": "first card",
//       "subtitle": "this is the first card",
//       "description": "this is the first card in the database",
//       "phone": "050-0000000",
//       "email": "firstCard@gmail.com",
//       "web": "https://www.test.co.il",
//       "image": {
//         "url": "",
//         "alt": ""
//       },
//       "address": {
//         "state": "",
//         "country": "test",
//         "city": "test",
//         "street": "test",
//         "houseNumber": 3,
//         "zip": "0"
//       }
//     },
//     {
//       "title": "second card",
//       "subtitle": "this is the second card",
//       "description": "this is the second card in the database",
//       "phone": "050-0000000",
//       "email": "secondCard@gmail.com",
//       "web": "https://www.test.co.il",
//       "image": {
//         "url": "",
//         "alt": ""
//       },
//       "address": {
//         "state": "",
//         "country": "test",
//         "city": "test",
//         "street": "test",
//         "houseNumber": 3,
//         "zip": "0"
//       }
//     },
//     {
//       "title": "third card",
//       "subtitle": "this is the third card",
//       "description": "this is the third card in the database",
//       "phone": "050-0000000",
//       "email": "thirdCard@gmail.com",
//       "web": "https://www.test.co.il",
//       "image": {
//         "url": "",
//         "alt": ""
//       },
//       "address": {
//         "state": "",
//         "country": "test",
//         "city": "test",
//         "street": "test",
//         "houseNumber": 3,
//         "zip": "0"
//       }
//     }

//  {
//       "name": { "first": "regular", "last": "user" },
//       "isBusiness": false,
//       "phone": "050-0000000",
//       "email": "regular@gmail.com",
//       "password": "Aa1234!",
//       "address": {
//         "country": "israel",
//         "city": "tel-aviv",
//         "street": "magnive",
//         "houseNumber": "5"
//       },
//       "image": { "url": "", "alt": "" }
//     },
//     {
//       "name": { "first": "business", "last": "user" },
//       "isBusiness": true,
//       "phone": "050-0000000",
//       "email": "business@gmail.com",
//       "password": "Aa1234!",
//       "address": {
//         "country": "israel",
//         "city": "tel-aviv",
//         "street": "magnive",
//         "houseNumber": "5"
//       },
//       "image": { "url": "", "alt": "" }
//     },
