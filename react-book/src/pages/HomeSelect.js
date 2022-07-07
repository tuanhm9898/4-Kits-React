import React from 'react';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

const HomeSelect = () => {
    return (
        <div>
            <Button variant="outline-primary">
                <Link to="/customer">customer</Link>
            </Button>
            <Button variant="outline-info">
                <Link to="/admin">admin</Link>
            </Button>
        </div>
    );
};

export default HomeSelect;