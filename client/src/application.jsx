import React from "react";
import { CssBaseline } from "@mui/material";
import { Header } from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export const App = () => (
    <Router>
        <CssBaseline />
        <Header />
        <Routes>
            <Route path="/main" element={<div>mein</div>} />
            <Route path="/" element={<div>helo</div>} />
        </Routes>
    </Router>
)