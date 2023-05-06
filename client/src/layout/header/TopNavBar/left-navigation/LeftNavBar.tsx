import React from "react";
import Box from "@mui/material/Box";
import Logo from "../Logo/Logo";
import LogoIcon from "../Logo/LogoIcon";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NavItem from "../../../components/NavItem";
import ROUTES from "../../../../routes/routesModel";

const LeftNavBar = () => {
  return (
    <Box>
      <LogoIcon />
      <Logo />

      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        {/* <Button color="inherit">
          <Typography>About</Typography>
        </Button> */}
        <NavItem label="About" to={ROUTES.ABOUT}/>
        {/* <Button color="inherit">
          <Typography>My Cards</Typography>
        </Button> */}
        <NavItem label="My Cards" to={ROUTES.MY_CARDS}/>
        {/* <Button color="inherit">
          <Typography>Fav Cards</Typography>
        </Button> */}
        <NavItem label="Fav Cards" to={ROUTES.FAV_CARDS}/>
        {/* <Button color="inherit">
          <Typography>Sandbox</Typography>
        </Button> */}
        <NavItem label="Sandbox" to={ROUTES.SANDBOX}/>
      </Box>
    </Box>
  );
};

export default LeftNavBar;
