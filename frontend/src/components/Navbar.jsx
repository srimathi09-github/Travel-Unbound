import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
        <Link
          to="/"
          className="brand"
          onClick={closeMenu}
        >
          <span className="brand-mark">TU</span>

          <span className="brand-text">
            <strong>Travel</strong>
            <span>Unbounded</span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Home
          </NavLink>

          <NavLink
            to="/destinations"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Destinations
          </NavLink>

          {/* Create Trip */}
          <NavLink
            to="/create-trip"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Create Trip
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            onClick={closeMenu}
          >
            Contact
          </NavLink>

          {/* Main CTA */}
          <Link
            to="/create-trip"
            className="nav-cta"
            onClick={closeMenu}
          >
            Plan a Journey
          </Link>

        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </header>
  );
};

export default Navbar;