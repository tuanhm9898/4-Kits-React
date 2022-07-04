import React, {useEffect, useState} from 'react';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo-removebg.jpg'

const NavBarsBook = (props) => {
    const mapStateToProps = (state) => {
        return {
            //_products: state._todoProduct,
            numberCart: state._todoProduct.numberCart,
        };
    };

    const [numberCart, setNumberCart] = useState(null);

    useEffect(() => {
        console.log('props.numberCart', props.numberCart);
        setNumberCart(props.numberCart);
    }, [props.numberCart]);

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand><Link to="/" className="nav-link">
                        <img src={logo} height="65" />
                    </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/" className="nav-link">Home</Link></Nav.Link>
                            <Nav.Link><Link to="cart" className="nav-link">Cart
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                                <span className="badge badge-warning" id="lblCartCount">
                                         {numberCart}
                                         </span>

                            </Link></Nav.Link>
                            <Nav.Link><Link to="/admin" className="nav-link">Admin</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBarsBook;
