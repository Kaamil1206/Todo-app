import React from 'react';
import { motion } from "framer-motion";

export const About = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="container my-4">
            <motion.h2
                className="text-center mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                About This App
            </motion.h2>

            {/* Main description card */}
            <motion.div
                className="glass-card mb-4"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6 }}
            >
                <div>
                    <h5 className="card-title">What is MyTodosList?</h5>
                    <p>
                        MyTodosList is a simple React app that helps you manage your daily tasks.
                        You can add, delete, and keep track of your todos. The app uses <strong>local storage</strong>
                        so your todos are saved even after you refresh the page.
                    </p>
                </div>
            </motion.div>

            {/* Three feature cards */}
            <div className="row text-center mb-4">
                {[
                    { title: "📝 Easy to Use", text: "Quickly add and delete todos with a clean interface." },
                    { title: "💾 Auto Save", text: "Todos are stored in your browser's local storage automatically." },
                    { title: "🚀 Built with React", text: "This app is made using modern React with functional components." }
                ].map((feature, idx) => (
                    <motion.div
                        className="col-md-4 mb-3"
                        key={idx}
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.2 }}
                    >
                        <div className="glass-card p-3 h-100">
                            <h5>{feature.title}</h5>
                            <p>{feature.text}</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Final Why Use It card */}
            <motion.div
                className="glass-card text-center p-4"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.6 }}
            >
                <h5>Why Use It?</h5>
                <p>
                    Life gets busy – and remembering everything isn’t easy.
                    With MyTodosList, you can stay <strong>organized, productive, and stress-free!</strong> ✨
                </p>
                <p className="text-muted fst-italic">
                    "Productivity is never an accident. It is always the result of a commitment to excellence."
                </p>
            </motion.div>
        </div>
    );
};
