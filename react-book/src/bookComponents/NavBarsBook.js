import React, {useEffect, useState} from 'react';
import {Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from './logo-removebg.jpg'
import {connect} from 'react-redux';


const NavBarsBook = (props) => {

    const [numberCart, setNumberCart] = useState(null);

    useEffect(() => {
        // console.log('props.numberCart', props.numberCart);
        setNumberCart(props.numberCart);
    }, [props.numberCart]);
//Nav bar fixed="top"
    return (
        <div>
            <Navbar bg="light" expand="lg" id="banner_style">
                <Container>
                    <Navbar.Brand><Link to="/" className="nav-link">
                        <img src={logo} height="65"/>
                    </Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/" className="nav-link">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/admin" className="nav-link">Admin</Link></Nav.Link>
                            <Nav.Link><Link to="cart" className="nav-link">
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>{' '}
                                <span class="badge bg-danger">{numberCart}</span>
                            </Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        numberCart: state._todoProduct.numberCart,
    };
};

export default connect(mapStateToProps, null)(NavBarsBook);
