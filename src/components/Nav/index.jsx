import {
  AppBar,
  Toolbar,
  Typography,
  // Button,
  IconButton,
  makeStyles,
  Container
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

const Nav = () => {
  const classes = useStyles();

  return (
    <Container fixed>
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{ background: "#e0d1f8", borderRadius: "4px" }}
        >
          <Toolbar color="">
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" className={classes.title}>
              {/* Портфолио */}
            </Typography>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <HomeIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </Container>
  );
};

export default Nav;
