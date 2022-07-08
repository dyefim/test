import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import getRandomRGB from 'utils/getRandomRGB';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
};

interface Props {
  data: {
    date: string;
    value: number;
  }[];
  label: string;
}

const Chart = (props: Props) => {
  const data = {
    labels: props.data.map((d) => d.date),
    datasets: [
      {
        label: props.label,
        data: props.data.map((d) => d.value),
        borderColor: getRandomRGB(),
        backgroundColor: getRandomRGB(),
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default Chart;
