import React from 'react';
import ScrollBook from "./Customer/scrollBook";

const CartTask = () => {
    return (
        <div>
            <h1>Trend</h1>
            <ScrollBook/>
            <div className="m-5">

                <h1>Hot</h1>
            </div>
            <ScrollBook/>
        </div>
    );
};

export default CartTask;