import React from "react";
import {Route, Routes} from "react-router-dom";
import './App.css'

import Home from "./pages/Home";
import CartDetails from "./pages/CartDetails";
import Admin from "./pages/Admin";
import NavBarsBook from "./bookComponents/NavBarsBook";
import FooterBook from "./bookComponents/menu/FooterBook";
import DetailBook from "./pages/DetailsBook";
import EditBook from "./pages/EditBook";
import Test from "./bookComponents/test";
import Order from "./bookComponents/testCartOrder";

function App() {
    return (
        <div>
            <div>
                <NavBarsBook/>
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
                    <Route path="/order" element={<Order />} />
                </Routes>
            </div>
            <div>
                <FooterBook/>
            </div>
        </div>
    );
}

export default App;
