import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import HomeNoLogin from "./HomeNoLogin";

const HomeSelect = () => {
    return (

        <div className="container">
            <Button variant="outline-primary" className="me-5">
                <Link to="/customer">customer</Link>
            </Button>
            <Button variant="outline-info">
                <Link to="/admin">admin</Link>
            </Button>

            <HomeNoLogin/>
        </div>
    );
};

export default HomeSelect;