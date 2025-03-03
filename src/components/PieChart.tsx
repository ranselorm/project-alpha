import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

type PieChartProps = {
  labels: string[];
  data: number[];
};

const PieChart = ({ labels, data }: PieChartProps) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: "Dataset",
        data,
        backgroundColor: [
          "#3B82F6", // Tailwind Blue-500
          "#EF4444", // Tailwind Red-500
          "#22C55E", // Tailwind Green-500
          "#FACC15", // Tailwind Yellow-400
          "#A855F7", // Tailwind Purple-500
        ],
        hoverOffset: 4,
      },
    ],
  };

  //   const options = {
  //     responsive: true,
  //     maintainAspectRatio: false,
  //     plugins: {
  //       legend: { position: "top" },
  //       tooltip: { enabled: true },
  //     },
  //   };

  return (
    <div className="w-full h-64 p-4 bg-white shadow-md rounded-lg">
      <Doughnut data={chartData} />
    </div>
  );
};

export default PieChart;
