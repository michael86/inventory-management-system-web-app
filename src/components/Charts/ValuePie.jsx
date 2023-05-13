import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { getRandRgba } from "../../utils/generic";

const ValuePie = ({ datasets }) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Tooltip,
    Legend,
    Title,
    Tooltip,
    Legend
  );

  const generateDataset = () => {
    const data = {
      labels: datasets.map((entry) => entry.label),
      datasets: [
        {
          label: "Current Value: £",
          data: [],
          backgroundColor: [],
        },
      ],
      borderWidth: 0,
    };

    datasets.forEach((entry) => {
      console.log(entry);
      data.datasets[0].data.push(
        parseFloat(entry.data[entry.data.length - 1].price / 100).toFixed(2) *
          entry.data[entry.data.length - 1].runningTotal
      );
      data.datasets[0].backgroundColor.push(getRandRgba());
    });

    return data;
  };

  generateDataset();
  return <Pie data={generateDataset()} />;
};

export default ValuePie;
