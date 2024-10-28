
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Use the same Navbar component
import '../App.css'; // Assuming the CSS file for styling

export default function ExplorePage() {
  const navigate = useNavigate();

  // Extended list of items
  const items = [
    { name: 'Item 1', stockCode: 'STK001', week1: 50, week2: 60, week3: 55, week4: 70 },
    { name: 'Item 2', stockCode: 'STK002', week1: 30, week2: 35, week3: 40, week4: 50 },
    { name: 'Item 3', stockCode: 'STK003', week1: 80, week2: 90, week3: 85, week4: 95 },
    { name: 'Item 4', stockCode: 'STK004', week1: 25, week2: 30, week3: 27, week4: 35 },
    { name: 'Item 5', stockCode: 'STK005', week1: 100, week2: 110, week3: 105, week4: 115 },
    { name: 'Item 6', stockCode: 'STK006', week1: 40, week2: 45, week3: 50, week4: 60 },
    { name: 'Item 7', stockCode: 'STK007', week1: 70, week2: 75, week3: 80, week4: 85 },
    { name: 'Item 8', stockCode: 'STK008', week1: 90, week2: 95, week3: 100, week4: 110 },
    { name: 'Item 9', stockCode: 'STK009', week1: 35, week2: 40, week3: 45, week4: 50 },
    { name: 'Item 10', stockCode: 'STK010', week1: 60, week2: 65, week3: 70, week4: 80 },
  ];

  const handleItemClick = (item) => {
    // Navigate to individual item page, passing item details via state
    navigate(`/item/${item.name}`, { state: { item } });
  };

  const handleForecastClick = () => {
    // Navigate to the forecast table page
    navigate('/forecast', { state: { items } });
  };

  return (
    <div className="explore">
      <Navbar />

      <div className="explore-content">
        <h1>Explore Items</h1>

        {/* Table to show items */}
        <table className="explore-table">
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Stock Code</th>
              <th>Week 1</th>
              <th>Week 2</th>
              <th>Week 3</th>
              <th>Week 4</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} onClick={() => handleItemClick(item)}>
                <td>{item.name}</td>
                <td>{item.stockCode}</td>
                <td>{item.week1}</td>
                <td>{item.week2}</td>
                <td>{item.week3}</td>
                <td>{item.week4}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Forecast Button */}
        <div className="forecast-section">
          <button className="forecast-btn" onClick={handleForecastClick}>
            Forecast
          </button>
        </div>
      </div>
    </div>
  );
}
