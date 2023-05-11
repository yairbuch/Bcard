import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar } from "@mui/material";
import NavItem from "../layout/components/NavItem";
import { SANDBOX_ROUTES } from "../routes/routesModel";
import { Outlet } from "react-router-dom";

const SandboxMenu = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent" >
        <Toolbar>
          <NavItem
            label="component"
            to={SANDBOX_ROUTES.COMPONENT}
            color="black"
          />
           <NavItem
            label="events"
            to={SANDBOX_ROUTES.EVENTS}
            color="black"
          />
          <NavItem
            label="mui-sandbox"
            to={SANDBOX_ROUTES.MUI_SANDBOX}
            color="black"
          />
          <NavItem
            label="props"
            to={SANDBOX_ROUTES.PROPS_MENU}
            color="black"
          />
           <NavItem
            label="use-state"
            to={SANDBOX_ROUTES.USE_STATE_MENU}
            color="black"
          />
          <NavItem
            label="lyfe-cycle"
            to={SANDBOX_ROUTES.LYFE_CYCLE_MENU}
            color="black"
          />
          <NavItem
            label="customHook"
            to={SANDBOX_ROUTES.CUSTOM_MENU}
            color="black"
          />
           <NavItem
            label="context"
            to={SANDBOX_ROUTES.CONTEXT_MENU}
            color="black"
          />
          
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default SandboxMenu;
