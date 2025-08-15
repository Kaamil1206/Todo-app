import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Header(props) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.className = darkMode ? "bg-light text-dark" : "bg-dark text-light";
    };

    return (
        <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>

                    {props.searchBar && (
                        <form className="d-flex me-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    )}

                    {/* Theme Toggle */}
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="themeSwitch"
                            checked={darkMode}
                            onChange={toggleTheme}
                        />
                        <label className="form-check-label" htmlFor="themeSwitch">
                            {darkMode ? "Dark Mode" : "Light Mode"}
                        </label>
                    </div>
                </div>
            </div>
        </nav>
    );
}

Header.defaultProps = {
    title: "Your Title Here",
    searchBar: true
};

Header.propTypes = {
    title: PropTypes.string,
    searchBar: PropTypes.bool
};