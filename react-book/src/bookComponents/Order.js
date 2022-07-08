import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { IncreaseQuantity, DecreaseQuantity, DeleteCart, ClearCart } from '../actions';
const Order = (props) => {
    let navigate = useNavigate();
    const [order, setOrder] = useState(null);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        let initData = {};
        setOrder(initData);
    }, []);

    useEffect(() => {
        console.log('order list useEffect!!');
        setCartItems(props.store_state.Carts);
    }, [props.store_state]);


    const getTotal = () => {
        let sum = 0;
        for (let item of cartItems) {
            sum += item.price * item.quantity;
        }
        return sum;
    };

    var carts_jsx = '';
    if (cartItems.length > 0) {
        carts_jsx = cartItems.map((item, key) => (
            <tr>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td class="text-right">{item.price * item.quantity} đ</td>
                <td class="text-center">
                    <button
                        class="btn btn-sm btn-danger"
                        onClick={() => props.DeleteCart(key)}
                    >
                        Remove
                    </button>
                </td>
            </tr>
        ));
    }

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let data = { ...order };
        data[name] = value;
        setOrder(data);
    };
    

    const saveInfo = () => {
        props.ClearCart();
        alert('dat hang thanh cong');
        order['cart'] = cartItems;
        const current = new Date();
        const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
        order['date']= date;
        order['total']=getTotal();
        console.log(order);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        };
        fetch('https://62baa4fb573ca8f832881fa9.mockapi.io/info/', requestOptions)
            .then(response => response.json())
            .then(data => setOrder(data));
    }
    return (
        <div class="container">
            <div class="row">
                <div class="col">
                    <h2 class="text-center">Your Cart</h2>
                    <table class="table table-bordered table-striped p-2">
                        <thead>
                            <tr>
                                <th>Product(s)</th>
                                <th>Quantity</th>
                                <th class="text-right">Price</th>
                                <th class="text-right"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.length == 0 ? (
                                <tr>
                                    <td colSpan="4" className="text-center">
                                        Your cart is empty
                                    </td>
                                </tr>
                            ) : (
                                ''
                            )}
                            {carts_jsx}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colspan="2" class="text-right">
                                    Total:
                                </td>
                                <td class="text-right">{getTotal()} đ</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            <div className="container mt-3 pt-5">
                <table class="table table-bordered table-striped p-2">
                    <tr>
                        <td><h2>Please input your info</h2></td>
                    </tr>
                    <tr>
                        <td>
                            <div class="form-floating mt-3 mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter Fullname"
                                    name="name"
                                    onChange={(e) => handleChange(e)}
                                />
                                <label for="name">Name</label>
                            </div>
                        </td>
                        <td>
                            <div class="form-floating mt-3 mb-3">
                                <input
                                    type="number"
                                    class="form-control"
                                    placeholder="Enter Phone Number"
                                    onChange={(e) => handleChange(e)}
                                    name="phone"
                                />
                                <label for="phone">Phone</label>
                            </div>
                        </td>
                    </tr>
                    <tr colspan="2">
                        <td>
                            <div class="form-floating mt-3 mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Enter Address"
                                    name="address"
                                    onChange={(e) => handleChange(e)}
                                />
                                <label for="address">Address</label>
                            </div>
                        </td>
                    </tr>
                    <tr colspan="2">
                        <td>
                            <div class="form-floating">
                                <textarea
                                    class="form-control"
                                    name="notes"
                                    placeholder="Note goes here"
                                    onChange={(e) => handleChange(e)}
                                ></textarea>
                                <label for="notes">Notes</label>
                            </div>
                        </td></tr>
                </table>


                <div class="row">
                    <div class="col">
                        <div class="text-center">
                        <button class="btn btn-outline-success m-1" type="button"
                                onClick={() => saveInfo()}>
                                 Confirm</button>
                                 <Link to="/customer"></Link>
                            <Link to="/customer/cart"><button class="btn btn-outline-danger m-1">
                                Back to Cart
                            </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

const mapStateToProps = (state) => {
    //  console.log(state)
    return {
        //items: state._todoProduct.Carts,
        store_state: state._todoProduct,
    };
};

export default connect(mapStateToProps, {
    IncreaseQuantity,
    DecreaseQuantity,
    DeleteCart,
    ClearCart
})(Order);