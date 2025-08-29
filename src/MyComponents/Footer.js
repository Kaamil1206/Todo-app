import React from 'react';

/**
 * Footer Component
 * Displays the copyright notice at the bottom of the page.
 */
export const Footer = () => {
    return (
        <footer
            className="footer bg-dark text-light text-center py-3"
            style={{
                position: "relative",  // Keeps footer at the bottom of the container
                bottom: "0",
                width: "100%",
                marginTop: "auto"      // Pushes footer down if container grows
            }}
        >
            <p className="text-center">
                &copy; {new Date().getFullYear()} MyTodosList.com | All Rights Reserved | Terms and Conditions
            </p>
        </footer>
    );
};
