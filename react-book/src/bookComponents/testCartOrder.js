import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {Button} from "react-bootstrap";
const Order = () => {
<<<<<<< HEAD
    let navigate = useNavigate();
    const SaveInfo = () => {
        const [product, setProduct] = useState(null);
        console.log(product, 'product');
        let method = 'POST';
        let id = '';
        if (product.id) {
          method = 'PUT';
          id = product.id;
        }
        console.log(method, 'saveProduct method');
        const requestOptions = {
          method: method,
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(product),
        };
    
        fetch(
          'https://62baa4fb573ca8f832881fa9.mockapi.io/info/' + id,
          requestOptions
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            navigate(-1);
          });
      };
  
    return (
      <div className="container mt-3 pt-5">
        {/* <table>{carts_info}</table> */}
        <table>
          <tr>
            <td>Info here</td>
          </tr>
          <tr>
            <td>
              <div class="form-floating mt-3 mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter Fullname"
                  name="name"
                />
                <label for="name">Name</label>
              </div>
            </td>
            <td>
              <div class="form-floating mt-3 mb-3">
                <input
                  type="number"
                  class="form-control ms-1"
                  id="phone"
                  placeholder="Enter phone number"
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
                  id="address"
                  placeholder="Enter Address"
                  name="address"
                />
                <label for="address">Address</label>
              </div>
            </td>
          </tr>
          <tr colspan="2">
            <td>
              <div class="form-floating mb-3">
                <textarea
                  class="form-control"
                  id="note"
                  name="text"
                  placeholder="Note goes here"
                ></textarea>
                <label for="note">Notes</label>
              </div>
            </td>
          </tr>
          <Button
              className="me-3"
              type="button"
              variant="outline-info"
              onClick={() => SaveInfo()}
            >
              Buy
            </Button>
          <Link to="/cart">
              <Button
                      variant="outline-warning"
                      >
                Cancel
              </Button>
            </Link>
        </table>
      </div>
    );
  };
  
=======
  const [data, setData] = useState(null);
  let navigate = useNavigate();
>>>>>>> 2cc68b4b0936138c9b388eee477db902b89e6b07

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    let data = { ...data };
    data[name] = value;
    setData(data);
  };
  const SaveInfo = () => {
    console.log(data, 'data');
    let method = 'POST';
    let id = '';
    if (data.id) {
      method = 'PUT';
      id = data.id;
    }
    console.log(method, 'saveProduct method');
    const requestOptions = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };

    fetch(
      'https://62baa4fb573ca8f832881fa9.mockapi.io/info/' + id,
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate(-1);
      });
  };


  // const SaveInfo = (id) => {
  //   fetch('https://62baa4fb573ca8f832881fa9.mockapi.io/info/' + id, {
  //     method: 'POST',
  //   }).then(() => {
  //     let result = [...data];
  //     result = result.filter((item) => {
  //       return item.id != id;
  //     });
  //     console.log(result, 'result');
  //     setData(result);
  //   });
  // };


  return (
    <div className="container mt-3 pt-5">
      {/* <table>{carts_info}</table> */}
      <table>
        <tr>
          <td>Info here</td>
        </tr>
        <tr>
          <td>
            <div class="form-floating mt-3 mb-3">
              <input
                type="text"
                class="form-control"

                placeholder="Enter Fullname"
                name="name"
                value={data.name}
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
                value={data.phone}
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
                value={data.address}
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
                name="text"
                placeholder="Note goes here"
                value={data.name}
                onChange={(e) => handleChange(e)}
              ></textarea>
              <label for="note">Notes</label>
            </div>
          </td>
        </tr>
        <button
          type="button"
          class="btn btn-success"
          onClick={() => SaveInfo()}
        >
          Save
        </button>
        <Link to="/cart">
          <button type="button" class="btn btn-secondary">
            Cancel
          </button>
        </Link>
      </table>
    </div>
  );
};


export default Order;