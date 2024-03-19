import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Home from '../pages/home'
import Login from "../components/login/login";

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/Home' />} />
            <Route path='/home' element={<Home/>} />
            <Route path='/login' element={<Login/>} />

            
        </Routes>
    );
};
export default Routers ;