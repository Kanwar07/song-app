import React from "react";
import sidenavstyle from "./SideNav.module.css";
import { Button, Stack } from "@mui/material";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <div
      style={{ height: "100vh", width: "30vh" }}
      className={sidenavstyle.maindiv}
    >
      <Stack direction="column" spacing={2}>
        <div className={sidenavstyle.logo}>Logo</div>
        <Stack
          direction="column"
          spacing={2}
          style={{ height: "85vh" }}
          className={sidenavstyle.mainstack}
        >
          <div className={sidenavstyle.buttons}>
            <Link to="/songs">
              <SpaceDashboardIcon style={{ color: "black" }} />
              <Button
                style={{ width: "10vh", textAlign: "center", color: "black" }}
              >
                Songs
              </Button>
            </Link>
          </div>
          <div className={sidenavstyle.buttons}>
            <Link to="/">
              <LogoutIcon style={{ color: "black" }} />
              <Button
                style={{ width: "10vh", textAlign: "center", color: "black" }}
              >
                Logout
              </Button>
            </Link>
          </div>
        </Stack>
      </Stack>
    </div>
  );
}

export default SideNav;
