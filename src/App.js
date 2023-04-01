import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { GlobalStyles } from "./styles/styled/Global"
import MainRoutes from "./routes/MainRoutes"

const App = () => {
    return (
        <Router>
            <GlobalStyles />
            <MainRoutes />
        </Router>
    )
}
export default App