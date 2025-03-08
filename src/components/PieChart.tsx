import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

type PieChartProps = {
  data: number[];
};

const PieChart = ({ data }: PieChartProps) => {
  const chartData = {
    // labels,
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

  return <Doughnut data={chartData} />;
};

export default PieChart;
