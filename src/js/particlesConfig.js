export function getParticlesConfig(reducedMotion) {
    if (reducedMotion) {
        return {
            fullScreen: {
                enable: false,
            },
            background: {
                color: "transparent",
            },
            particles: {
                number: {
                    value: 40,
                    density: {
                        enable: true,
                        area: 1000,
                    },
                },
                color: {
                    value: "#ff4b2d80",
                },
                shape: {
                    type: "circle",
                },
                opacity: {
                    value: 0.4,
                },
                size: {
                    value: 2.5,
                },
                links: {
                    enable: true,
                    distance: 130,
                    color: "#ff4b2d80",
                    opacity: 0.3,
                    width: 1,
                },
                move: {
                    enable: false,
                },
            },
            detectRetina: true,
        };
    }

    return {
        fullScreen: {
            enable: false,
        },
        background: {
            color: "transparent",
        },
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    area: 900,
                },
            },
            color: {
                value: "#ff4b2d80",
            },
            shape: {
                type: "circle",
            },
            opacity: {
                value: 0.6,
            },
            size: {
                value: {
                    min: 2,
                    max: 4
                }, // 🔥 variación natural
            },
            links: {
                enable: true,
                distance: 150,
                color: "#ff4b2d80",
                opacity: 0.5,
                width: 1.2,
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                outModes: {
                    default: "out",
                },
            },
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                onClick: {
                    enable: true,
                    mode: "push",
                },
                resize: true,
            },
            modes: {
                repulse: {
                    distance: 150,
                    duration: 0.4,
                },
                push: {
                    quantity: 3,
                },
            },
        },
        detectRetina: true,
    };
}