import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import ExplorePage from './pages/ExplorePage'; // Import ExplorePage
import ItemPage from './pages/ItemPage';
import ForecastPage from './pages/ForecastPage';

function App() {
  return (
    <Router basename="/Login-Page-React"> {/* Use basename for the subdirectory */}
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        {/* Add a catch-all route for non-existent paths */}
        <Route path="/item/:name" element={<ItemPage />} />
        <Route path="/forecast" element={<ForecastPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
