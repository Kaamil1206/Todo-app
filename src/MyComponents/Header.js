import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

export default function Header({ title, searchBar }) {
    const [darkMode, setDarkMode] = useState(false);

    // Load saved theme from localStorage on page load
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setDarkMode(true);
            document.body.className = "bg-dark text-light";
        } else {
            document.body.className = "bg-light text-dark";
        }
    }, []);

    const toggleTheme = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);

        if (newMode) {
            document.body.className = "bg-dark text-light";
            localStorage.setItem("theme", "dark");
        } else {
            document.body.className = "bg-light text-dark";
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <nav className={`navbar navbar-expand-lg ${darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
            <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="#">{title}</a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>

                    {searchBar && (
                        <form className="d-flex me-3" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    )}

                    {/* Theme Switch */}
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
