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
import { Form, InputGroup } from "react-bootstrap";

const chartOptions = {
  responsive: true,
};

const UseageChart = ({ plugins, labels, datasets }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  chartOptions.plugins = plugins;

  const data = {
    labels,
    datasets: datasets,
  };

  return <Bar options={chartOptions} data={data} />;
};

export default UseageChart;
