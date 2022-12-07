import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { getHalfMonths } from "../../utils";

const UseageChart = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Stock Usage",
      },
    },
  };

  const months = getHalfMonths(true).sort((a, b) => (a - b ? 1 : -1));

  const data = {
    months,
    datasets: [
      //   {
      //     label: "Dataset 1",
      //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //     backgroundColor: "rgba(255, 99, 132, 0.5)",
      //   },
      //   {
      //     label: "Dataset 2",
      //     data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      //     backgroundColor: "rgba(53, 162, 235, 0.5)",
      //   },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default UseageChart;
