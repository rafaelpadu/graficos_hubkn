import {
  Card,
  CardHeader,
  Checkbox,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles({
  dialogTitle: {
    alignSelf: "center",
  },
  gridMain: {
    width: "48rem",
    height: "26rem",
  },
  cardHeader: {
    padding: 15,
  },
  list: {
    width: 260,
    height: 262,
    backgroundColor: "#eee",
    overflow: "auto",
  },
  button: {
    margin: "0.5rem",
  },
});
export enum Filtros {
  ligacoes = "Ligações",
  tempo = "Tempo em chamada (min)",
  email = "E-mails enviados",
  reuniao = "Reuniões agendadas",
  negocios = "Negócios Fechados",
  valorTotal = "Valor Total",
  ticketMedio = "Ticket Médio",
}

const negativo = (a: Filtros[], b: Filtros[]) =>
  a.filter((value) => b.indexOf(value) === -1);
const intersecao = (a: Filtros[], b: Filtros[]) =>
  a.filter((value) => b.indexOf(value) !== -1);
const unir = (a: Filtros[], b: Filtros[]) => [...a, ...negativo(b, a)];
interface Props {
  filtrosSelec: (arg: Filtros[]) => void;
  qualFiltro: number;
}
const FiltrosDialog: React.FunctionComponent<Props> = ({
  filtrosSelec,
  qualFiltro,
}) => {
  let filtrosDesejados: Filtros[] = [];
  const classes = useStyles();
  const [checked, setChecked] = useState<Filtros[]>([]);
  if (qualFiltro === 1) {
    filtrosDesejados = [
      Filtros.reuniao,
      Filtros.tempo,
      Filtros.email,
      Filtros.ligacoes,
    ];
  } else {
    filtrosDesejados = [
      Filtros.negocios, //Nao consegui fazer um grafico que compara dados tão distantes como esses tres
      Filtros.valorTotal,
      Filtros.ticketMedio,
    ];
  }
  const [left, setLeft] = useState<Filtros[]>(filtrosDesejados);
  const [right, setRight] = useState<Filtros[]>([]);
  const leftChecked = intersecao(checked, left);
  const rightChecked = intersecao(checked, right);
  const toggleChecks = (val: Filtros) => () => {
    const index = checked.indexOf(val);
    const newChecked = [...checked];
    if (index === -1) {
      newChecked.push(val);
    } else {
      newChecked.splice(index, 1);
    }
    setChecked(newChecked);
  };
  useEffect(() => filtrosSelec(right));
  const numChecked = (items: Filtros[]) => intersecao(checked, items).length;

  const handleToggleAll = (items: Filtros[]) => () => {
    if (numChecked(items) === items.length) {
      setChecked(negativo(checked, items));
    } else {
      setChecked(unir(checked, items));
    }
  };

  const handleCheckRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(negativo(left, leftChecked));
    setChecked(negativo(checked, leftChecked));
  };

  const handleCheckLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(negativo(right, rightChecked));
    setChecked(negativo(checked, rightChecked));
  };
  const cardList = (titulo: React.ReactNode, itens: Filtros[]) => (
    <Card>
      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Checkbox
            onClick={handleToggleAll(itens)}
            checked={numChecked(itens) === itens.length && itens.length !== 0}
            disabled={itens.length === 0}
          />
        }
        subheader={`${numChecked(itens)}/${itens.length} selecionados`}
        title={titulo}
      />
      <Divider />
      <List role="list" component="div" className={classes.list}>
        {itens.map((val: Filtros) => {
          return (
            <ListItem
              button
              key={val}
              role="listitem"
              onClick={toggleChecks(val)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(val) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText id={val} primary={`${val}`}>
                ...
              </ListItemText>
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );
  return (
    <Grid
      container
      className={classes.gridMain}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>{cardList("Escolhas", left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <IconButton
            className={classes.button}
            onClick={handleCheckRight}
            disabled={leftChecked.length === 0}
          >
            <ChevronRight />
          </IconButton>
          <IconButton
            className={classes.button}
            onClick={handleCheckLeft}
            disabled={rightChecked.length === 0}
          >
            <ChevronLeft />
          </IconButton>
        </Grid>
      </Grid>
      <Grid item>{cardList("Escolhidos", right)}</Grid>
    </Grid>
  );
};
export default FiltrosDialog;
