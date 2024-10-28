import { Line } from 'react-chartjs-2';

export default function RevenueGraph() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Best Revenue',
        data: [500, 700, 800, 1000, 950],
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
      },
    ],
  };

  const options = {
    scales: {
      x: { title: { display: true, text: 'Time' } },
      y: { title: { display: true, text: 'Revenue ($)' } },
    },
  };

  return <Line data={data} options={options} />;
}
