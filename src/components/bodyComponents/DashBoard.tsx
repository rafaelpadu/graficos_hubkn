import React, { useEffect, useState } from "react";
import { Card, IconButton, makeStyles, Typography } from "@material-ui/core";
import ListIcon from "@material-ui/icons/List";
import GraficoGeral from "./relatorios/performance/GraficoGeral";
import FiltrosDialog, { Filtros } from "./relatorios/performance/FiltrosDialog";

const useStyle = makeStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontFamily: "Roboto",
    fontSize: "1.825em",
    color: "#3C4858",
    fontWeight: 200,
    margin: "45px 0 0 0",
  },
  mainCard: {
    maxWidth: "1200px",
  },
  formMain: {
    display: "flex",
    flexDirection: "row",
    margin: "35px 0",
  },
});

const DashBoard: React.FunctionComponent = () => {
  const classes = useStyle();
  const [openDialog, setOpenDialog] = useState(false);
  const [filtros, setFiltros] = useState<Filtros[]>([]);
  return (
    <div className={classes.main}>
      <div>
        <Typography className={classes.title} variant={"h3"}>
          Relatório Informativo sobre a Performance de Vendedores
        </Typography>
      </div>
      <IconButton onClick={() => setOpenDialog(true)}>
        <ListIcon />
      </IconButton>
      <Typography>Selecione os tipos de relatorios</Typography>
      <Card className={classes.mainCard} elevation={6}>
        <GraficoGeral filtros={filtros} />
      </Card>
      <FiltrosDialog
        openDialog={openDialog}
        handleCloseDialog={() => setOpenDialog(false)}
        filtrosSelec={setFiltros}
      />
    </div>
  );
};
export default DashBoard;
