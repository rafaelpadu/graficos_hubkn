import React from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Dashboard, Group } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  drawerMain: {
    width: "250px",
  },
});

interface Props {
  handleOpenDrawer?: () => void;
  openDrawer: boolean;
}

const DrawerP: React.FunctionComponent<Props> = ({
  openDrawer,
  handleOpenDrawer,
}) => {
  // const [open, setOpen] = useState(openDrawer);
  const classes = useStyles();
  return (
    <nav>
      <Drawer anchor={"left"} open={openDrawer} onClose={handleOpenDrawer}>
        <div role="presentation" className={classes.drawerMain}>
          <List>
            <Link
              to={"/"}
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={handleOpenDrawer}
            >
              <ListItem button>
                <ListItemIcon>
                  <Dashboard />
                </ListItemIcon>
                <ListItemText>CRM DashBoard</ListItemText>
              </ListItem>
            </Link>
          </List>
          <List>
            <Link
              to={"/vendedores"}
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={handleOpenDrawer}
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
