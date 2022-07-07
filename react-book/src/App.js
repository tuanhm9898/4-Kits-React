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
import Test from "./bookComponents/Test";
import Order from "./bookComponents/Order";
import HomeAdmin from "./bookComponents/Admin/HomeAdmin";
import FlashSale from "./bookComponents/flashSale";
import Coupon from "./bookComponents/menu/menuItem1/coupon";
import Trending from "./bookComponents/menu/menuItem1/trending";
import MarketBook from "./bookComponents/menu/menuItem1/marketBook";
import NewBook from "./bookComponents/menu/menuItem1/newBook";
import BestSellerBook from "./bookComponents/menu/menuItem2/bestSellerBook";
import ReviewBook from "./bookComponents/menu/menuItem2/reviewBook";
import Manga from "./bookComponents/menu/menuItem2/manga";
import About from "./bookComponents/menu/menuItem2/about";

function App() {
    return (
        <div>
            <div>
                <NavBarsBook/>
            </div>
            <div>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="cart" element={<CartDetails/>}/>
                    <Route path="admin" element={<Admin/>}/>
                    <Route path="/book/:id" element={<DetailBook/>}/>
                    <Route path="edit/:id" element={<EditBook/>}/>
                    <Route path="edit/new" element={<EditBook/>}/>
                    <Route path="/test" element={<Test/>}/>
                    <Route path="/order" element={<Order/>}/>
                    <Route path="/flashSale" element={<FlashSale/>}/>
                    <Route path="/coupon" element={<Coupon/>}/>
                    <Route path="/trending" element={<Trending/>}/>
                    <Route path="/marketBook" element={<MarketBook/>}/>
                    <Route path="/newBook" element={<NewBook/>}/>
                    <Route path="/bestSeller" element={<BestSellerBook/>}/>
                    <Route path="/reviewBook" element={<ReviewBook/>}/>
                    <Route path="/manga" element={<Manga/>}/>
                    <Route path="/about" element={<About/>}/>

                </Routes>
            </div>
            <div>
                <FooterBook/>
            </div>
        </div>
    );
}

export default App;
