import {
  AppBar,
  Badge,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import { AccountCircle, Notifications } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";

import DrawerP from "./DrawerP";

const useStyles = makeStyles({
  mainMenu: {
    backgroundColor: "#047cf4",
    display: "flex",
    flexDirection: "row",
    height: "90px",
    justifyContent: "space-between",
  },
  leftItems: {
    display: "flex",
    flexDirection: "row",
    marginLeft: "90px",
  },
  rightItems: {
    alignSelf: "center",
    marginRight: "90px",
  },
});

const Header: React.FunctionComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const classes = useStyles();

  return (
    <div>
      <AppBar position="static" className={classes.mainMenu}>
        <div className={classes.leftItems}>
          <Toolbar>
            <IconButton edge="start" onClick={() => setOpenDrawer(!openDrawer)}>
              <MenuIcon style={{ color: "#eee" }} />
            </IconButton>
          </Toolbar>
        </div>
        <div className={classes.rightItems}>
          <IconButton style={{ color: "#eee" }}>
            <Badge badgeContent={11} color="secondary">
              <Notifications style={{ width: "35px", height: "35px" }} />
            </Badge>
          </IconButton>
          <IconButton edge="end" aria-haspopup="true" style={{ color: "#eee" }}>
            <AccountCircle style={{ width: "35px", height: "35px" }} />
          </IconButton>
        </div>
      </AppBar>
      <DrawerP
        openDrawer={openDrawer}
        handleOpenDrawer={() => setOpenDrawer(false)}
      />
    </div>
  );
};
export default Header;
