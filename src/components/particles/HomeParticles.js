import React, { useCallback } from "react"
import { loadFull } from "tsparticles"
import Particles from "react-tsparticles"

const HomeParticles = () => {

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine)
    }, [])

    return (
        <>
            <Particles
                id="particles"
                init={particlesInit}
                options={{
                    fullScreen: {
                        enable: false
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onHover: {
                                enable: true,
                                mode: "bubble",
                            },
                            resize: true,
                        },
                        modes: {
                            bubble: {
                                distance: 40,
                                size: 10,
                                duration: 1,
                                opacity: 0.75,
                                speed: 2,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: ['#64ffb3', '#64ffc0', '#64ffcd','#64ffda', '#64ffe7', '#64fff4', '#64fdff'],
                        },
                        links: {
                            enable: false,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: true,
                            straight: false,
                            speed: 0.75
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 1600,
                            },
                            value: 200,
                        },
                        opacity: {
                            value: 0.1,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: 5,
                            random: true
                        },
                    },
                    detectRetina: true,
                }}
            />
        </>
    )
}

export default HomeParticles