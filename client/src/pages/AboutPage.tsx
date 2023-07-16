import React from "react";
import Container from "@mui/material/Container";
import PageHeader from "./../components/PageHeader";
import Grid from "@mui/material/Grid";


const AboutPage = () => {
  return (
    <Container maxWidth="lg">
      <PageHeader
        title="About Page"
        subtitle="On this page you can find explanations about using the application"
      />

      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          md={5}
          alignSelf="center"
          fontSize={18}
          lineHeight="1.5"
        >
          <span style={{ color: "blue", fontSize: "26px" }}>
            Welcome to our Website!
          </span>{" "}
          <br />
          here you can find an information about how to use our site with all
          its fitchers and oppurtunities. In first Step you have to sign up and
          fill the required fields ( mentioned with asterix), please fill them
          as well the conditions that will appear under each field when you
          start typing. In the first regestriation you will connect
          automatically to the main page but after you logout you have to get
          the Login link and fill your eamil and password to get in. You can
          signup as a Business member, and it will give you the option to
          addvertise your products in the site.
        </Grid>
        <Grid item md={7} xs={12}>
          <img src="/assets/images/register.png" alt="card" width="100%" />
        </Grid>
        <Grid item md={12} xs={12}>
          <hr color="blue" />
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          alignSelf="center"
          fontSize={18}
          lineHeight="1.5"
        >
          All kind of users can do like to cards and see them in their Favorite
          cards page. In addition, when clicking card's body you will transfer
          to landing page with specific information about the product.
        </Grid>
        <Grid item md={7} xs={12}>
          <img src="/assets/images/favpage.png" alt="card" width="50%" />
          <img src="/assets/images/detailpage.png" alt="card" width="50%" />
        </Grid>
        <Grid item md={12} xs={12}>
          <hr color="blue" />
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          alignSelf="center"
          fontSize={18}
          lineHeight="1.5"
        >
          Business Member can add his cards to the website in 'My Cards' link,
          when clicking the odd button you will transfer to add card page. If
          you want to edit it later, just clicking the pencil icon on your card
          and you will get all the details of the product in the initial table.
        </Grid>
        <Grid item md={7} xs={12}>
          <img src="/assets/images/mycards.png" alt="card" width="50%" />
          <img src="/assets/images/editcard.png" alt="card" width="50%" />
        </Grid>
        <Grid item md={12} xs={12}>
          <hr color="blue" />
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          alignSelf="center"
          fontSize={18}
          lineHeight="1.5"
        >
          Admins Members can manage their users in the CRM system. If you are an
          admin (in that site you can insert the email: admin@gmail.com and the
          password: Aa1234! to get that page and see how it works) the link
          'CRM' will appear in the head navbar. The page consist table with the
          details of all the users in the website. You can delete users by
          clicking the delete button or change their status by clicking the
          business status.
        </Grid>
        <Grid item md={7} xs={12}>
          <img src="/assets/images/crm.png" alt="card" width="100%" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AboutPage;
