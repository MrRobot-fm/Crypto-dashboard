import { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { getCoinData } from '@/utils/clientApi';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = () => {
  const [chartData, setChartData] = useState({
    datasets: []
  });

  const [chartOptions, setChartOptions] = useState({});
  const [coins, setCoins] = useState(null);

  useEffect(() => {
    getCoinData(10, setCoins);
  }, []);

  useEffect(() => {
    if (coins) {
      setChartData({
        labels: coins.map(coin => coin.name),
        datasets: [
          {
            label: 'Market Cap',
            data: coins.map(coin => coin.marketCap),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.4)'
          }
        ]
      });
      setChartOptions({
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Market Cap'
          }
        },
        maintainAspectRatio: false,
        responsive: true
      });
    }
  }, [coins]);

  return (
    <>
      <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
        <Bar data={chartData} options={chartOptions} />
      </div>
    </>
  );
};

export default BarChart;
