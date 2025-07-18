import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Navbar({ title = 'Github Finder' }) {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-4xl" />
          <Link to="/" className="text-lg ml-3 font-bold align-middle">
            {title}
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;
