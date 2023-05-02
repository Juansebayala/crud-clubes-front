import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-primary px-5">
      <Link to="/" className="navbar-brand">
        Home
      </Link>
    </nav>
  );
}

export default Navbar;
