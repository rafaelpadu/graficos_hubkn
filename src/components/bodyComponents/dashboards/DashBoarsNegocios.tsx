import { Grid, makeStyles, Typography, Card, Divider } from "@material-ui/core";
import { Timer } from "@material-ui/icons";
import React from "react";
import { Filtros } from "../relatorios/performance/FiltrosDialog";
import GraficoGeral from "../relatorios/performance/GraficoGeral";

const useStyles = makeStyles({
  title: {
    fontFamily: "Roboto",
    fontSize: "2.3em",
    color: "#3C4858",
    fontWeight: 200,
    margin: "25px 0 25px 0",
  },
  cardTitle: {
    fontFamily: "Roboto",
    fontSize: "1.4em",
    color: "#3C4858",
    fontWeight: 200,
    margin: "0 0 5px 20px",
    textAlign: "left",
  },
  cardSubTitle: {
    fontFamily: "Roboto",
    fontSize: "0.9em",
    color: "#999",
    fontWeight: 200,
    margin: "5px 0 5px 5px",
    textAlign: "left",
  },
  gridItem: {
    display: "flex",
    justifyContent: "center",
    padding: "12px",
  },
  cardTexts: {
    display: "flex",
  },
});
const DashBoardsNegocios: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12}>
        <Typography className={classes.title}>
          DashBoards sobre as Vendas dos Vendedores
        </Typography>
      </Grid>
      <Grid item xs={4} className={classes.gridItem}>
        <Card style={{ width: "32em" }}>
          <GraficoGeral filtros={[Filtros.negocios]} widthGrafico={400} />
          <Typography className={classes.cardTitle}>
            Número de Negócios Fechados
          </Typography>
          <Divider />
          <div className={classes.cardTexts}>
            <Timer style={{ margin: "5px 0 5px 15px" }} />
            <Typography className={classes.cardSubTitle}>
              atualizado há 05 minutos
            </Typography>
          </div>
        </Card>
      </Grid>
      <Grid item xs={4} className={classes.gridItem}>
        <Card style={{ width: "32em" }}>
          <GraficoGeral filtros={[Filtros.valorTotal]} widthGrafico={400} />
          <Typography className={classes.cardTitle}>Valor Total</Typography>
          <Divider />
          <div className={classes.cardTexts}>
            <Timer style={{ margin: "5px 0 5px 15px" }} />
            <Typography className={classes.cardSubTitle}>
              atualizado há 25 minutos
            </Typography>
          </div>
        </Card>
      </Grid>
      <Grid item xs={4} className={classes.gridItem}>
        <Card style={{ width: "32em" }}>
          <GraficoGeral filtros={[Filtros.ticketMedio]} widthGrafico={400} />
          <Typography className={classes.cardTitle}>Ticket Médio</Typography>
          <Divider />
          <div className={classes.cardTexts}>
            <Timer style={{ margin: "5px 0 5px 15px" }} />
            <Typography className={classes.cardSubTitle}>
              atualizado há 45 minutos
            </Typography>
          </div>
        </Card>
      </Grid>
    </Grid>
  );
};
export default DashBoardsNegocios;
