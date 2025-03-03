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
        label: "Weekly New Users",
        data,
        borderColor: "rgb(59, 130, 246)", // Tailwind Blue-500
        backgroundColor: "rgba(59, 130, 246, 0.2)", // Light fill color
        borderWidth: 2,
        tension: 0.4, // Curve effect
      },
    ],
  };

  //   const options = {
  //     responsive: true,
  //     maintainAspectRatio: false,
  //     plugins: {
  //       legend: { display: true, position: "top" },
  //       tooltip: { enabled: true },
  //     },
  //     scales: {
  //       x: { grid: { display: false } },
  //       y: { beginAtZero: true },
  //     },
  //   };

  return (
    <div className="w-full h-80 p-4 bg-white shadow-md rounded-lg my-12">
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
