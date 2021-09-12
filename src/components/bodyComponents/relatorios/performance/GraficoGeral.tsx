import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Filtros } from "./FiltrosDialog";
import { dataSet } from "../data/dataSets";
const data = {
  labels: [
    dataSet.vendedor1.nome,
    dataSet.vendedor2.nome,
    dataSet.vendedor3.nome,
    dataSet.vendedor4.nome,
  ],
  datasets: [
    {
      label: ["Ligações"],
      data: [200, 280, 150, 100],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
    {
      label: ["Minutos"],
      data: [200, 280, 150, 100],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

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
}
const GraficoGeral: React.FunctionComponent<Props> = ({ filtros }) => {
  useEffect(() => console.log(filtros));
  return (
    <Bar
      style={{ width: "1200px", height: "800px" }}
      data={data}
      options={options}
    />
  );
};
export default GraficoGeral;
