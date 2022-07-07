import React from 'react';
import NavBarsBook from "../bookComponents/NavBarsBook";
import FooterBook from "../bookComponents/menu/FooterBook";
import {Outlet} from "react-router-dom";

const Customer = () => {
    return (
        <div>
            <NavBarsBook/>
            <Outlet/>
            <FooterBook/>

        </div>
    );
};

export default Customer;