import React from 'react';
import Card from 'react-bootstrap/Card';
import {AiOutlineHeart} from "react-icons/ai";
import Button from 'react-bootstrap/Button';

const ScrollBook = () => {


    return (
        <div style={{height:"500px",overflowY:"auto"}}>
        <Card style={{width: '18rem'}} className="mb-3">
            <Card.Img variant="top" src="holder.js/100px180"/>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Button variant="outline-danger"><AiOutlineHeart/></Button>

            </Card.Body>
        </Card>
            </div>

    );
};

export default ScrollBook;