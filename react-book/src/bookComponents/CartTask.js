import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import Image from 'react-bootstrap/Image';
import {Button} from "react-bootstrap";

const CartTask = (props) => {
    const [cart, setCart] = useState();

    useEffect(() => {
       setCart(props.data)
    }, [props.data]);

    var list_cart = [];

    const deleteTask = (id) => {
        fetch('https://62baa4fb573ca8f832881fa9.mockapi.io/cart/' + id, {
            method: 'DELETE',
        }).then(() => {
            console.log('delete successful!!');
            let result = [...cart];
            result = result.filter((item) => {
                return item.id != id;
            });
            setCart(result);
        });
    };

    if (cart != null) {
        cart.map((c, id) => {
            return list_cart.push(
                <Toast className="mt-3">
                    <Toast.Header onClick={() => deleteTask(c.id)}>
                        <Image src={c.image} style={{ height: '40px' }} />
                        <strong className="me-auto ms-3">Name : {c.name}</strong>
                    </Toast.Header>
                    <Toast.Body> Chapter : {c.chapter}</Toast.Body>
                </Toast>

            );
        });
    }

    return (
        <div>
            {list_cart}
        </div>
    );
};

export default CartTask;