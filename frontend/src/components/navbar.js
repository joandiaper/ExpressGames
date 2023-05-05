import { Link } from 'react-router-dom';
import "../css/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/resultsTamagotchi">Tamagotchi Results</Link></li>
        <li><Link to="/resultsPPTLS">PPTLS Results</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
