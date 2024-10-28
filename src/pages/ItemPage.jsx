import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Line } from 'react-chartjs-2'; // Assuming you're using react-chartjs-2 for graphs
import '../App.css'; // Assuming the CSS file for styling

export default function ItemPage() {
  const location = useLocation();
  const { item } = location.state;

  // Example prediction logic based on last week's data
  const predictedQuantities = [item.week4 + 5, item.week4 + 10, item.week4 + 15, item.week4 + 20];

  // Chart data
  const data = {
    labels: ['Week 5', 'Week 6', 'Week 7', 'Week 8'],
    datasets: [
      {
        label: `${item.name} Predicted Sales`,
        data: predictedQuantities,
        borderColor: '#00b3e6',
        backgroundColor: 'rgba(0, 179, 230, 0.2)',
        borderWidth: 2,
        pointBackgroundColor: '#00b3e6',
        pointRadius: 5,
        fill: false,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
        },
        ticks: {
          color: '#333',
        },
      },
      y: {
        grid: {
          color: 'rgba(200, 200, 200, 0.2)',
        },
        ticks: {
          color: '#333',
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#666',
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <div className="graph-container">
      <Navbar />
      <h1 className="graph-title">{item.name} Predicted Sales</h1>
      <div className="graph-legend">
        <div className="graph-legend-item">
          <span></span>
          <p>{item.name} Predicted Sales</p>
        </div>
      </div>
      <div style={{ height: '400px' }}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
