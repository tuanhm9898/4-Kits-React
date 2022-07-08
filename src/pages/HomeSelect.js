import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import HomeNoLogin from "./HomeNoLogin";

const HomeSelect = () => {
    return (

        <div className="container">
            <Button variant="outline-info">
                <Link to="/loginHome">Login</Link>
            </Button>
            <HomeNoLogin/>
        </div>
    );
};

export default HomeSelect;