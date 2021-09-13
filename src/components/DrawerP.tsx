import React, { useState } from "react";
import {
  Collapse,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@material-ui/core";
import {
  Dashboard,
  ExpandLess,
  ExpandMore,
  Group,
  Speed,
  AttachMoney,
  Apps,
  Assessment,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from "../assets/hubkn_Logo-1.png";
const useStyles = makeStyles({
  drawerMain: {
    width: "250px",
  },
});

interface Props {
  handleOpenDrawer: () => void;
  openDrawer: boolean;
}

const DrawerP: React.FunctionComponent<Props> = ({
  openDrawer,
  handleOpenDrawer,
}) => {
  const [openList, setOpenList] = useState(false);
  const [openList2, setOpenList2] = useState(false);
  const [openList3, setOpenList3] = useState(false);
  const handleOpenLists = () => {
    setOpenList(false);
    setOpenList2(false);
    setOpenList3(false);
  };
  const handler = () => {
    handleOpenDrawer();
    handleOpenLists();
  };
  const classes = useStyles();
  return (
    <nav>
      <Drawer anchor={"left"} open={openDrawer} onClose={handleOpenDrawer}>
        <div role="presentation" className={classes.drawerMain}>
          <List>
            <ListItem style={{ justifyContent: "center", margin: "8px 0 " }}>
              <img
                src={Logo}
                alt="Logo Hubkn"
                style={{ width: "157px", height: "45px", alignSelf: "center" }}
              />
            </ListItem>
            <Divider />
            <ListItem button onClick={() => setOpenList(!openList)}>
              <ListItemIcon>
                <Dashboard />
              </ListItemIcon>
              <ListItemText>CRM DashBoard</ListItemText>
              {openList ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openList} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem
                  button
                  style={{ marginLeft: "10px" }}
                  onClick={() => setOpenList2(!openList2)}
                >
                  <Speed />
                  <ListItemText
                    primary="Performance"
                    style={{ marginLeft: "10px" }}
                  />
                  {openList2 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openList2} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <Link
                      to={"/performance/geral"}
                      style={{ textDecoration: "none", color: "inherit" }}
                      onClick={handler}
                    >
                      <ListItem button style={{ marginLeft: "20px" }}>
                        <Assessment />
                        <ListItemText
                          primary="Relatorio Geral"
                          style={{ marginLeft: "10px" }}
                        />
                      </ListItem>
                    </Link>
                    <Link
                      to={"/performance/dashboards"}
                      style={{ textDecoration: "none", color: "inherit" }}
                      onClick={handler}
                    >
                      <ListItem button style={{ marginLeft: "20px" }}>
                        <Apps />
                        <ListItemText
                          primary="Relatorio Dashboard"
                          style={{ marginLeft: "10px" }}
                        />
                      </ListItem>
                    </Link>
                  </List>
                </Collapse>
                <ListItem
                  button
                  style={{ marginLeft: "10px" }}
                  onClick={() => setOpenList3(!openList3)}
                >
                  <AttachMoney />
                  <ListItemText
                    primary="Negócios"
                    style={{ marginLeft: "10px" }}
                  />
                  {openList3 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={openList3} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <Link
                      to={"/negocios/geral"}
                      style={{ textDecoration: "none", color: "inherit" }}
                      onClick={handler}
                    >
                      <ListItem button style={{ marginLeft: "20px" }}>
                        <Assessment />
                        <ListItemText
                          primary="Relatorio Geral"
                          style={{ marginLeft: "10px" }}
                        />
                      </ListItem>
                    </Link>
                    <Link
                      to={"/negocios/dashboards"}
                      style={{ textDecoration: "none", color: "inherit" }}
                      onClick={handler}
                    >
                      <ListItem button style={{ marginLeft: "20px" }}>
                        <Apps />
                        <ListItemText
                          primary="Relatorio Dashboard"
                          style={{ marginLeft: "10px" }}
                        />
                      </ListItem>
                    </Link>
                  </List>
                </Collapse>
              </List>
            </Collapse>
          </List>
          <List>
            <Link
              to={"/vendedores"}
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={handler}
            >
              <ListItem button>
                <ListItemIcon>
                  <Group />
                </ListItemIcon>
                <ListItemText>Vendedores</ListItemText>
              </ListItem>
            </Link>
          </List>
        </div>
      </Drawer>
    </nav>
  );
};

export default DrawerP;
