import Navbar from '../components/Navbar';
import BestSoldGraph from '../components/graphs/BestSoldGraph';
import RevenueGraph from '../components/graphs/RevenueGraph';
import '../App.css';

export default function DashboardPage() {
  return (
    <div className="dashboard">
      <Navbar />

      {/* Dashboard Header */}
      <div className="dashboard-content">
        <h1>Dashboard</h1>

        {/* Introductory Section */}
        <div className="dashboard-intro">
          <p>Welcome to our company insights dashboard. Here you can view a summary of your best-selling items and the highest revenue-generating products. Use this data to strategize and make informed decisions to grow your business.</p>
        </div>

        {/* Insights Section */}
        <div className="dashboard-insights">
          <h2>Key Insights</h2>
          <ul>
            <li>The best-selling items are recorded over time to track popularity.</li>
            <li>Revenue trends give insights into high-performing products and sales spikes.</li>
            <li>Data-driven insights help you optimize product offerings and improve sales strategies.</li>
          </ul>
        </div>

        {/* Graphs Section */}
        <div className="graphs">
          <div className="graph">
            <h2>Best Sold Items</h2>
            <BestSoldGraph />
          </div>
          <div className="graph">
            <h2>Best Revenue</h2>
            <RevenueGraph />
          </div>
        </div>

        {/* Summary Section */}
        <div className="dashboard-summary">
          <h2>Summary</h2>
          <p>Based on the current data, the most sold item is performing exceptionally well, and there has been a significant increase in revenue over the past quarter. Keep an eye on these trends to capitalize on sales opportunities and boost overall profitability.</p>
        </div>

        {/* Call-to-Action Section */}
        <div className="dashboard-cta">
          <h2>Take Action</h2>
          <p>Use these insights to stock more of your best-selling items or offer promotions to increase sales for underperforming products. Stay informed and continue to make data-driven decisions for future success.</p>
        </div>
      </div>
    </div>
  );
}
