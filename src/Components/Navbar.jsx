import { FaKhanda } from 'react-icons/fa';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav
      className={`absolute top-0 left-0 w-full z-50 ${
        isHome ? 'bg-orange-400 bg-opacity-60' : 'bg-transparent'
      } text-white font-semibold p-4`}
    >
      <div className="max-w-7xl mx-auto px-2 py-1 flex items-center justify-between">
        <div className="flex space-x-8 text-[1.5rem]">
          <Link to="/" className="hover:text-orange-600">
            Home
          </Link>
          <Link to="/Gurudwaras" className="hover:text-orange-600">
            Gurudwaras
          </Link>
          <Link to="/history" className="hover:text-orange-600">
            History
          </Link>
          <Link to="/donate" className="hover:text-orange-600">
            Donate
          </Link>
          <Link to="/about" className="hover:text-orange-600">
            About
          </Link>
          <Link to="/contact" className="hover:text-orange-600">
            Contact
          </Link>
        </div>

        {isHome ? (
          <button
            onClick={() => navigate('/donate')}
            className="flex items-center text-[1.5rem] bg-blue-950 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition duration-200"
          >
            <FaKhanda className="mr-2" />
            <Link to='/donate'>Find your spiritual peace</Link>
            
          </button>
        ) : (
          <Link
            to="/donate"
            className="text-[1.5rem] bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full transition duration-200"
          >
            Donate
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
