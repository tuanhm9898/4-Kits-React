import React from "react";
import {Route, Routes} from "react-router-dom";
import FooterBook from ".././menu/FooterBook";
import DetailBook from "../../pages/DetailsBook";
import EditBook from "../../pages/EditBook";
import NavBarAdmin from ".././Admin/NavBarAdmin";
import Customer from ".././Admin/Customer";

function HomeAdmin() {
    return (
        <div>
            <div>
                <NavBarAdmin/>
            </div>
            <div>
                <Routes >
                    <Route path="/book/:id" element={<DetailBook/>}/>
                    <Route path="edit/:id" element={<EditBook/>}/>
                    <Route path="edit/new" element={<EditBook/>}/>
                    <Route path="/navAdmin" element={<NavBarAdmin/>}/>
                    <Route path="/customer" element={<Customer/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default HomeAdmin;
