
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../App.css'; // Assuming you are using a common CSS file

export default function ForecastPage() {
  const location = useLocation();
  const { items } = location.state;

  return (
    <div className="forecast">
      <Navbar />
      <div className="forecast-content">
        <h1 className="forecast-title">Item Forecasts</h1>
        <table className="forecast-table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Stock Code</th>
              <th>Week 1</th>
              <th>Week 2</th>
              <th>Week 3</th>
              <th>Week 4</th>
              <th>Predicted Week 5</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.stockCode}</td>
                <td>{item.week1}</td>
                <td>{item.week2}</td>
                <td>{item.week3}</td>
                <td>{item.week4}</td>
                <td>{item.week4 + 10}</td> {/* Example prediction logic */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
