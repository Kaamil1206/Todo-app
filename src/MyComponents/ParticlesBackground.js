import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Lightweight version of tsparticles

/**
 * ParticlesBackground Component
 * Displays a dynamic particles background using tsparticles library.
 */
const ParticlesBackground = () => {
    const [initialized, setInitialized] = useState(false);

    // Initialize particles engine on component mount
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine); // Load lightweight particles engine
        }).then(() => {
            setInitialized(true); // Set flag once initialized
        });
    }, []);

    // Wait until particles engine is initialized
    if (!initialized) return null;

    return (
        <Particles
            id="tsparticles"
            options={{
                background: {
                    color: "#ffffff", // Background color
                },
                fpsLimit: 60,
                particles: {
                    number: {
                        value: 80,
                        density: { enable: true, area: 800 },
                    },
                    color: { value: "#000000" }, // Particle color
                    links: {
                        enable: true,
                        distance: 150,
                        color: "#000000",
                        opacity: 0.4,
                        width: 1,
                    },
                    move: {
                        enable: true,
                        speed: 2,
                        direction: "none",
                        outModes: { default: "bounce" },
                    },
                    shape: { type: "circle" },
                    size: { value: { min: 2, max: 5 } },
                },
                interactivity: {
                    events: {
                        onHover: { enable: true, mode: "repulse" }, // Repulse on hover
                        onClick: { enable: true, mode: "push" },    // Add particles on click
                    },
                    modes: {
                        repulse: { distance: 100 },
                        push: { quantity: 4 },
                    },
                },
            }}
        />
    );
};

export default ParticlesBackground;
