import React, { useState } from "react";
import { Card, Grid, makeStyles, Typography } from "@material-ui/core";
import GraficoGeral from "../relatorios/performance/GraficoGeral";
import FiltrosDialog, {
  Filtros,
} from "../relatorios/performance/FiltrosDialog";

const useStyle = makeStyles({
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontFamily: "Roboto",
    fontSize: "2.3em",
    color: "#3C4858",
    fontWeight: 200,
    margin: "45px 0 45px 0",
  },
  titleFilter: {
    fontFamily: "Roboto",
    fontSize: "30px",
    color: "#3C4858",
    fontWeight: 200,
    margin: "0 0 -15px 0",
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

const DashBoardGeralPerf: React.FunctionComponent = () => {
  const classes = useStyle();
  const [filtros, setFiltros] = useState<Filtros[]>([]);
  return (
    <div className={classes.main}>
      <Typography className={classes.title} variant={"h3"}>
        Relatório Informativo sobre a Performance dos Vendedores
      </Typography>
      <Grid
        container
        direction="row-reverse"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={6}>
          <Card className={classes.mainCard} elevation={6}>
            <GraficoGeral filtros={filtros} widthGrafico={250} />
          </Card>
        </Grid>
        <Grid item xs={5}>
          <Typography className={classes.titleFilter}>
            Selecione os tipos de relatorios
          </Typography>
          <FiltrosDialog filtrosSelec={setFiltros} qualFiltro={1} />
        </Grid>
      </Grid>
    </div>
  );
};
export default DashBoardGeralPerf;
