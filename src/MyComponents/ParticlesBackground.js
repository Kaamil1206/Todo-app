import React from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim"; // lightweight version

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) {
        return null; // wait until initialized
    }

    return (
        <Particles
            id="tsparticles"
            options={{
                background: {
                    color: "#ffffff", // white background
                },
                fpsLimit: 60,
                particles: {
                    number: {
                        value: 80,
                        density: { enable: true, area: 800 },
                    },
                    color: { value: "#000000" }, // black atoms
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
                        onHover: { enable: true, mode: "repulse" },
                        onClick: { enable: true, mode: "push" },
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
