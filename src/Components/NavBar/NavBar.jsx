import React from "react";
import { Stack, Button } from "@mui/material";
import navbarstyle from "./NavBar.module.css";

function NavBar({ handleaddsongsclick }) {
  const handleaddsongs = () => {
    handleaddsongsclick();
  };
  return (
    <div
      className={navbarstyle.maindiv}
      style={{ width: "165vh", height: "15vh" }}
    >
      <Stack direction="column" spacing={2}>
        <div className={navbarstyle.heading1}>
          First-level Menu / Second-level Menu /{" "}
          <span style={{ color: "black" }}>Current Page</span>
        </div>
        <Stack direction="row" spacing={2} className={navbarstyle.secondstack}>
          <div>Songs</div>
          <Button className={navbarstyle.button} onClick={handleaddsongs}>
            Add Songs
          </Button>
        </Stack>
      </Stack>
    </div>
  );
}

export default NavBar;
