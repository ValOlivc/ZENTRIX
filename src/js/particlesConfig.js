/**
 * Opciones de tsParticles para el fondo del landing.
 * @param {boolean} reducedMotion - Si es true, partículas casi estáticas (accesibilidad).
 */
export function getParticlesConfig(reducedMotion) {
    if (reducedMotion) {
        // Variante estática: sin movimiento de partículas; menos carga visual.
        return {
            // Importante: si estuviera en true, el canvas ocuparía toda la ventana y taparía el footer.
            fullScreen: {
                enable: false,
            },
            background: {
                color: "transparent",
            },
            particles: {
                number: {
                    value: 70,
                    density: {
                        enable: true,
                        area: 1000,
                    },
                },
                color: {
                    value: "#ff4b2d80",
                },
                shape: {
                    type: "polygon",
                },
                opacity: {
                    value: 0.3,
                },
                size: {
                    value: 2.5,
                },
                links: {
                    enable: true,
                    distance: 130,
                    color: "#fa401f5d", // líneas entre partículas cercanas
                    opacity: 0.2,
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
        // Variante por defecto: movimiento e interacción hover/clic.
        fullScreen: {
            enable: false,
        },
        background: {
            color: "transparent",
        },
        particles: {
            number: {
                value: 70,
                density: {
                    enable: true,
                    area: 900,
                },
            },
            color: {
                value: "#fa401f5d", // tono acorde al tema (naranja suave, con alpha en hex 8 dígitos)
            },
            shape: {
                type: "polygon",
            },
            opacity: {
                value: 0.5,
            },
            size: {
                value: {
                    min: 2,
                    max: 4
                }, // variación natural
            },
            links: {
                enable: true,
                distance: 150,
                color: "#fa401f5d",
                opacity: 0.4,
                width: 1.2,
            },
            move: {
                // Movimiento orgánico sin dirección fija.
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
            // Interacciones al pasar/clickear con el mouse.
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