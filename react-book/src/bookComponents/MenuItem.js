import React, {useEffect, useState} from 'react';
import {Nav, Navbar} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import {Link} from "react-router-dom";


const MenuItem = () => {
    const [data, setData] = useState()
    let url = 'https://62baa4fb573ca8f832881fa9.mockapi.io/category'
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((item) => {
                setData(item);
            });
    }, [data]);
    const listCategory = []
    if (data != null) {
        data.map((c, id) => {
            return listCategory.push(
                <Nav.Link>   <Link to="" className="nav-link"> {c.name} </Link> </Nav.Link>
            );
        });
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className="text-center">
                    <Nav className="me-auto">
                            {listCategory}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default MenuItem;