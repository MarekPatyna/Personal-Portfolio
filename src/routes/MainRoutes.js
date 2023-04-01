import React, { useEffect, useLayoutEffect, useState } from "react"
import RotateLoader from "react-spinners/RotateLoader"
import Header from "../page/header/Header"
import Home from "../page/home/Home"
import About from "../page/about/About"
import Portfolio from "../page/portfolio/Portfolio"
import Contact from "../page/contact/Contact"
import Footer from "../page/footer/Footer"
import { Route, Routes, Navigate } from "react-router-dom"
import AOS from "aos"

const MainRoutes = () => {

    const [loading, setLoading] = useState(false)
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }

    useEffect(() => {
        AOS.init({once: true})
        setLoading(true)
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000)
        return () => clearTimeout(timer)
    },[])

    useLayoutEffect(() => {
        if(loading) {
            document.body.style.overflow = "hidden"
            document.querySelector('html').style.overflow = "hidden"
        }
    },[loading])

    return (
        <>
            {loading
                ?
                <div style={style}>
                    <RotateLoader
                        loading={loading}
                        size={20}
                        color="#64FFDA"
                    />
                </div>
                :
                <>
                    <Routes>
                        <Route path='/' element={
                            <>
                                <Header />
                                <Home />
                                <About />
                                <Portfolio />
                                <Contact />
                                <Footer />
                            </>
                        }
                        />
                        <Route path='*' element={<Navigate to='/' />} />
                    </Routes>
                </>
            }
        </>
    )
}

export default MainRoutes