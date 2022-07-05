import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'

import Home from "./pages/Home";
import CartDetails from "./pages/CartDetails";
import Admin from "./pages/Admin";
import NavBarsBook from "./bookComponents/NavBarsBook";
import FooterBook from "./bookComponents/FooterBook";
import DetailBook from "./pages/DetailsBook";
import EditBook from "./pages/EditBook";
import Test from "./bookComponents/test";

function App() {
    return (
        <div>
            <div>
                <NavBarsBook />
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="cart" element={<CartDetails />} />
                    <Route path="admin" element={<Admin />} />
                    <Route path="/book/:id" element={<DetailBook />} />
                    <Route path="edit/:id" element={<EditBook />} />
                    <Route path="edit/new" element={<EditBook />} />
                    <Route path="/test" element={<Test />} />
                </Routes>
            </div>
            <div>
                <FooterBook />
            </div>
        </div>
    );
}

export default App;
