import './App.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">MyApp</h1>

      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/users">users</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/products">products</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
