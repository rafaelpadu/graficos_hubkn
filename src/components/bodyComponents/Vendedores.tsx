import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
import { dataSet as data } from "./relatorios/data/dataSets";

const useStyles = makeStyles({
  body: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  header: {
    fontFamily: "Roboto",
    fontSize: "3.4em",
    color: "#3C4858",
    margin: "70px 0",
  },
  tableMain: {
    width: "80%",
  },
  tableHeader: {
    fontFamily: "Roboto",
    fontSize: "1.4em",
    color: "#3C4858",
  },
  tableCellHeader: {
    fontFamily: "Roboto",
    fontSize: "0.9em",
    color: "#3C4858",
    marginLeft: "288px",
  },
});
const Vendedores: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.body}>
      <Typography className={classes.header}>
        Tabela de Dados dos Vendedores
      </Typography>
      <TableContainer component={Paper} className={classes.tableMain}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                component="th"
                align="center"
                className={classes.tableHeader}
              >
                Vendedor
              </TableCell>
              <TableCell align="right" className={classes.tableHeader}>
                Ligações
              </TableCell>
              <TableCell align="right" className={classes.tableHeader}>
                Tempo em chamada (min)
              </TableCell>
              <TableCell align="right" className={classes.tableHeader}>
                E-mails enviados
              </TableCell>
              <TableCell align="right" className={classes.tableHeader}>
                Reuniões agendadas
              </TableCell>
              <TableCell align="right" className={classes.tableHeader}>
                Negócios Fechados
              </TableCell>
              <TableCell align="right" className={classes.tableHeader}>
                Valor Total
              </TableCell>
              <TableCell align="right" className={classes.tableHeader}>
                Ticket Médio
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell
                  component="th"
                  scope="row"
                  align="center"
                  className={classes.tableCellHeader}
                >
                  {row.nome}
                </TableCell>
                <TableCell align="center" className={classes.tableCellHeader}>
                  {row.ligacoes}
                </TableCell>
                <TableCell align="center" className={classes.tableCellHeader}>
                  {row.tempo}
                </TableCell>
                <TableCell align="center" className={classes.tableCellHeader}>
                  {row.emails}
                </TableCell>
                <TableCell align="center" className={classes.tableCellHeader}>
                  {row.reuniao}
                </TableCell>
                <TableCell align="center" className={classes.tableCellHeader}>
                  {row.negocios}
                </TableCell>
                <TableCell align="center" className={classes.tableCellHeader}>
                  {" "}
                  {`R$ ${row.valorTotal.toFixed(2).replace(".", ",")}`}
                </TableCell>
                <TableCell
                  align="center"
                  className={classes.tableCellHeader}
                >{`R$ ${row.ticketMedio
                  .toFixed(2)
                  .replace(".", ",")}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Vendedores;
