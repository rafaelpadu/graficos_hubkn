import {
  AppBar,
  Badge,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
} from "@material-ui/core";
import { AccountCircle, Notifications } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState } from "react";
import Logo from "../assets/hubkn_Logo-1.png";
import DrawerP from "./DrawerP";

const useStyles = makeStyles({
  mainMenu: {
    backgroundColor: "#eee",
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
  const [menuOpen, setMenuOpen] = useState(false);
  const classes = useStyles();

  const handleMenuClose: () => void = () => setMenuOpen(false);
  return (
    <header>
      <AppBar position="static" className={classes.mainMenu}>
        <div className={classes.leftItems}>
          <Toolbar>
            <IconButton edge="start" onClick={() => setOpenDrawer(!openDrawer)}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
          <img
            src={Logo}
            alt="Logo Hubkn"
            style={{ width: "157px", height: "45px", alignSelf: "center" }}
          />
        </div>
        <div className={classes.rightItems}>
          <IconButton color="primary">
            <Badge badgeContent={11} color="secondary">
              <Notifications style={{ width: "35px", height: "35px" }} />
            </Badge>
          </IconButton>
          <IconButton
            edge="end"
            aria-haspopup="true"
            onClick={() => setMenuOpen(true)}
            color="primary"
          >
            <AccountCircle style={{ width: "35px", height: "35px" }} />
          </IconButton>
        </div>
        <Menu
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          keepMounted
          transformOrigin={{ vertical: "top", horizontal: "right" }}
          open={menuOpen}
          onClose={handleMenuClose}
        >
          <MenuItem>Perfil</MenuItem>
          <MenuItem>Configurações</MenuItem>
          {/* <MenuItem>Log-Out</MenuItem>//TODO se conseguir fazer tela de login e registro */}
        </Menu>
      </AppBar>
      <DrawerP
        openDrawer={openDrawer}
        handleOpenDrawer={() => setOpenDrawer(false)}
      />
    </header>
  );
};
export default Header;
