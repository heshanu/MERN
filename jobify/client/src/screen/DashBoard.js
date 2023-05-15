import React from 'react';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const DashBoard = () => {
    return (
        <div>
            <h1>DashBoard</h1>
            <Link to="/register"> <button className='b'>Click Me!</button></Link>
        </div>
    );
}

export default DashBoard;
