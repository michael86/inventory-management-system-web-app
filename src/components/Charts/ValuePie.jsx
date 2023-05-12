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

// {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [
//           {
//             label: "# of Votes",
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//               "rgba(255, 99, 132, 0.2)",
//               "rgba(54, 162, 235, 0.2)",
//               "rgba(255, 206, 86, 0.2)",
//               "rgba(75, 192, 192, 0.2)",
//               "rgba(153, 102, 255, 0.2)",
//               "rgba(255, 159, 64, 0.2)",
//             ],

//             borderWidth: 1,
//           },
//         ],
//       }
