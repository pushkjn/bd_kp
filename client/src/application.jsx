import React, { useEffect } from "react";
import { CssBaseline } from "@mui/material";
import { Header } from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const Main = () => {
    useEffect(() => {
        fetch('http://localhost:3000/api/cars/all')
            .then(res => res.json())
            .then(res => console.log(res))

            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            main
        </div>
    )
}

export const App = () => (
    <Router>
        <CssBaseline />
        <Header />
        <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/" element={<div>helo</div>} />
        </Routes>
    </Router>
)