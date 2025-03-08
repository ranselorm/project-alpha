import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

type LineChartProps = {
  data: number[];
  labels: string[];
};

const LineChart = ({ data, labels }: LineChartProps) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Male",
        data,
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  return <Line data={chartData} />;
};

export default LineChart;
