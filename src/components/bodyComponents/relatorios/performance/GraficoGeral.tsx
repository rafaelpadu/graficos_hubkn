import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Filtros } from "./FiltrosDialog";
import { dataSet as Data } from "../data/dataSets";

const options = {
  scale: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

interface Props {
  filtros: Filtros[];
  widthGrafico: number;
}
type ObjFinal = {
  labels: string[];
  datasets: {
    label: string;
    data: (string | number)[];
    backgroundColor: string;
  }[];
};

function makeDataSets(filtros: Filtros[]) {
  let names: string[] = [];
  Data.map((name) => names.push(name.nome));

  let dataSet: {
    label: string;
    data: (string | number)[];
    backgroundColor: string;
  }[] = [];

  let filterKey: string;
  let backgroundColor: string;

  filtros.map((filtro) => {
    let dataInfo: (string | number)[] = [];
    switch (filtro) {
      case "Ligações":
        filterKey = "ligacoes";
        backgroundColor = "rgba(255, 99, 132, 1)";
        break;
      case "Tempo em chamada (min)":
        filterKey = "tempo";
        backgroundColor = "rgba(54, 162, 235, 1)";
        break;
      case "E-mails enviados":
        filterKey = "emails";
        backgroundColor = "rgba(255, 206, 86, 1)";
        break;
      case "Negócios Fechados":
        filterKey = "negocios";
        backgroundColor = "rgba(255, 99, 132, 1)";
        break;
      case "Valor Total":
        filterKey = "valorTotal";
        backgroundColor = "rgba(54, 162, 235, 1)";
        break;
      case "Ticket Médio":
        filterKey = "ticketMedio";
        backgroundColor = "rgba(255, 206, 86, 1)";
        break;
      default:
        filterKey = "reuniao";
        backgroundColor = "rgba(75, 192, 192, 1)";
    }
    Data.map((item) => {
      for (let [key, value] of Object.entries(item)) {
        if (key === filterKey) {
          dataInfo.push(value);
        }
      }
      return dataInfo;
    });
    console.log(dataInfo);
    let obj = {
      label: `# ${filtro}`,
      data: dataInfo,
      backgroundColor: backgroundColor,
    };
    return dataSet.push(obj);
  });
  const objFinal = {
    labels: names,
    datasets: dataSet,
  };
  return objFinal;
}

const GraficoGeral: React.FunctionComponent<Props> = ({
  filtros,
  widthGrafico,
}) => {
  const [dataFinal, setDataFinal] = useState<ObjFinal>();
  useEffect(() => {
    setDataFinal(makeDataSets(filtros));
  }, [filtros]);

  return (
    <Bar
      style={{ width: `${widthGrafico}px`, padding: "1rem " }}
      data={dataFinal}
      options={options}
    />
  );
};
export default GraficoGeral;
