import './Header.css';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

/**
 * Header Component
 * Displays the navigation bar with links and an optional search bar.
 */
export default function Header({ title, searchBar }) {
    return (
        <nav className="navbar navbar-expand-lg glass-navbar">
            <div className="container-fluid">

                {/* Brand / App Title */}
                <Link className="navbar-brand" to="/">
                    {title}
                </Link>

                {/* Hamburger menu for mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar links and optional search bar */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>

                    {/* Conditional Search Bar */}
                    {searchBar && (
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </nav>
    );
}

// Default props in case none are provided
Header.defaultProps = {
    title: "Your Title Here",
    searchBar: true
};

// Type checking for props
Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool
};
