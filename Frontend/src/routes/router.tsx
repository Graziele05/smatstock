import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./Home";
import Login from './Login'

function MainRoutes() {
    return (
            <Routes>
                < Route path="/" element={<Login />} />
            </Routes>
    );
};
export default MainRoutes;