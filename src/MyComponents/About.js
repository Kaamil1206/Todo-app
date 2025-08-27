import React from 'react';

export const About = () => {
    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">About This App</h2>

            <div className="card shadow-sm mb-4">
                <div className="card-body">
                    <h5 className="card-title">What is MyTodosList?</h5>
                    <p className="card-text">
                        MyTodosList is a simple React app that helps you manage your daily tasks. 
                        You can add, delete, and keep track of your todos. The app uses <strong>local storage</strong> 
                        so your todos are saved even after you refresh the page.
                    </p>
                </div>
            </div>

            <div className="row text-center mb-4">
                <div className="col-md-4 mb-3">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">📝 Easy to Use</h5>
                            <p className="card-text">Quickly add and delete todos with a clean interface.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">💾 Auto Save</h5>
                            <p className="card-text">Todos are stored in your browser's local storage automatically.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-3">
                    <div className="card h-100 shadow-sm">
                        <div className="card-body">
                            <h5 className="card-title">🚀 Built with React</h5>
                            <p className="card-text">This app is made using modern React with functional components.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card shadow-sm">
                <div className="card-body text-center">
                    <h5 className="card-title">Why Use It?</h5>
                    <p className="card-text">
                        Life gets busy – and remembering everything isn’t easy.  
                        With MyTodosList, you can stay <strong>organized, productive, and stress-free!</strong> ✨
                    </p>
                    <p className="text-muted fst-italic">"Productivity is never an accident. It is always the result of a commitment to excellence."</p>
                </div>
            </div>
        </div>
    );
};
