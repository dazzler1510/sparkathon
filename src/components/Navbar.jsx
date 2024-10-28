import { Link } from 'react-router-dom';
import '../App.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="/src/assets/logo1.png" alt="App Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/explore">Explore</Link></li>
        <li><Link to="/profile">
          <img src="/src/assets/proflelogo1.png" alt="Profile Logo" className="profile-logo" />
        </Link></li>
      </ul>
    </nav>
  );
}
