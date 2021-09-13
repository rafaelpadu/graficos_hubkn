import React from "react";
import { Divider, makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles({
  footer: {
    background: "#eee",
    width: "100%",
    height: "3.5rem",
    position: "absolute",
    bottom: 0,
    left: 0,
    marginTop: "15px",
  },
  footerText: {
    fontFamily: "Roboto",
    fontSize: "0.9em",
    color: "#3C4858",
    fontWeight: 200,
    marginTop: "15px",
  },
});
const Footer: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <Divider />
      <Typography className={classes.footerText}>
        © 2021 - Rafael de Pádua{" "}
      </Typography>
    </div>
  );
};
export default Footer;
