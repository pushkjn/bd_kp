import React, { useEffect } from "react";
import { CssBaseline } from "@mui/material";
import { Header } from "./components/header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { DataPage } from "./pages/dataPage";

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
            <Route
                path="/showrooms"
                element={
                    <div id="showrooms">
                        <DataPage dataSection={{ name: 'showrooms', columns: [ 'name', 'address', 'rating', 'website', 'email' ], searchBy: 'name' }} />
                    </div>
                }
            />
            <Route
                path="/data"
                element={
                    <div id="cars">
                        <DataPage dataSection={{ name: 'cars', columns: [ 'model', 'assembly', 'body_style', 'brand', 'power' ], searchBy: 'model' }} />
                    </div>
                }
            />
            <Route
                path="/clients"
                element={
                    <div id="clients">
                        <DataPage dataSection={{ name: 'client', columns: [ 'name', 'surname', 'phone_number', 'email' ], searchBy: 'name' }} />
                    </div>
                }
            />
            <Route path="/main" element={<Main />} />
            <Route path="/" element={<div>helo</div>} />
        </Routes>
    </Router>
)