import React from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";

export const MyAppBar = () => {
  return (
    <AppBar
      position="static"
      color="secondary"
      style={{
        marginBottom: "30px",
        backgroundImage:
          "linear-gradient( 89.7deg,  rgba(0,0,0,1) -10.7%, rgba(53,92,125,1) 88.8% )"
      }}
    >
      <Toolbar>
        <Typography variant="h6">
          <Link href="/" underline="none" style={{ color: "#fff" }}>
            My YouTube App
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
