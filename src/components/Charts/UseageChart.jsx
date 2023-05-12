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
import { getRandRgba } from "../../utils/generic";

const chartOptions = {
  responsive: true,
};

const UseageChart = ({ plugins, labels, datasets }) => {
  // console.log("datasets", datasets);
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  chartOptions.plugins = plugins;

  const generateData = () => {
    const data = datasets.map((entry) => {
      return {
        label: entry.label,
        backgroundColor: getRandRgba(),
        data: entry.data.map(({ runningTotal }) => runningTotal),
      };
    });

    return data;
  };

  // console.log(data);
  return (
    <Bar
      options={chartOptions}
      data={{
        labels,
        datasets: generateData(),
      }}
    />
  );
};

export default UseageChart;
