import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "absolute",
        top: "100vh",
        width: "100%",
    }
    return (
        <footer className='bg-dark text-light text-center py-3' style={footerStyle} >
            <p className="text-center">
                Copyright &copy; MyTodosList.com | All Rights Reserved | Terms and Conditions
            </p>

        </footer >
    )
}
