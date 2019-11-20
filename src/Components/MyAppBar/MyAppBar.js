import React from "react";
import { AppBar } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { Link } from "@material-ui/core";

// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";

export const MyAppBar = () => {
  return (
    <AppBar
      position="static"
      color="secondary"
      style={{ marginBottom: "30px" }}
    >
      <Toolbar>
        {/* <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton> */}
        <Typography variant="h6">
          <Link href="/" underline="none" style={{color: "#fff"}}>My YouTube App</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
