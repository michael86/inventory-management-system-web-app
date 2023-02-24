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
// import { Pie } from "react-chartjs-2";

const ValuePie = () => {
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
  return;
};

export default ValuePie;
