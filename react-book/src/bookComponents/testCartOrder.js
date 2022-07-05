import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { IncreaseQuantity, DecreaseQuantity, DeleteCart } from '../actions';
const Order = (props) => {
  let navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
      console.log('product list useEffect!!');
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
              <td>{key + 1}</td>
              <td>
                  <button
                      className="btn btn-sm"
                      onClick={() => props.DecreaseQuantity(key)}
                  >
                      -
                  </button>
                  <input
                      type="number"
                      value={item.quantity}
                      class="form-control-sm"
                      style={{ width: '5em', min: '0' }}
                  />
                  <button
                      class="btn btn-sm"
                      onClick={() => props.IncreaseQuantity(key)}
                  >
                      +
                  </button>
              </td>
              <td>{item.name}</td>
              <td class="text-right">{item.price}.000 đ</td>
              <td class="text-right">{item.price * item.quantity}.000 đ</td>
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
  return (
      <div class="container-fluid">
          <div class="row">
              <div class="col mt-2">
                  <h2 class="text-center">Your Cart</h2>
                  <table class="table table-bordered table-striped p-2">
                      <thead>
                          <tr>
                              <th>STT</th>
                              <th>Quantity</th>
                              <th>Product</th>
                              <th class="text-right">Price</th>
                              <th class="text-right">Subtotal</th>
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
                              <td colspan="3" class="text-right">
                                  Total:
                              </td>
                              <td class="text-right">{getTotal()}.000 đ</td>
                          </tr>
                      </tfoot>
                  </table>
              </div>
          </div>
          <div class="row">
              <div class="col">
                  <div class="text-center">
                      <Link to="/Order"><button class="btn btn-success m-1" type="button">
                          Checkout</button></Link>
                      <Link to="/"><button class="btn btn-danger m-1">
                          Continue Shopping
                      </button></Link>
                  </div>
              </div>
          </div>
      </div>
  );
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
})(Order);
//   const [data, setData] = useState(null);
//   let navigate = useNavigate();

//   useEffect(() => {
//     let url = 'https://62baa4fb573ca8f832881fa9.mockapi.io/info/';
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data);
//         console.log(data, 'data info');
//       });
//   }, []);

//   const handleChange = (event) => {
//     const target = event.target;
//     const value = target.value;
//     const name = target.name;

//     let data = { ...data };
//     data[name] = value;
//     setData(data);
//   };

// //CART INFO

// // END OF CART INFO

//   const saveInfo = () => {
//     console.log(data, 'info data');
//     let method = 'POST';
//     let id = '';
//     if (data.id) {
//       method = 'PUT';
//       id = data.id;
//     }
//     console.log(method, 'saveProduct method');
//     const requestOptions = {
//       method: method,
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(data),
//     };

//     fetch(
//       'https://62baa4fb573ca8f832881fa9.mockapi.io/info/' + id,
//       requestOptions
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         navigate(-1);
//       });
//   };


//   // const SaveInfo = (id) => {
//   //   fetch('https://62baa4fb573ca8f832881fa9.mockapi.io/info/' + id, {
//   //     method: 'POST',
//   //   }).then(() => {
//   //     let result = [...data];
//   //     result = result.filter((item) => {
//   //       return item.id != id;
//   //     });
//   //     console.log(result, 'result');
//   //     setData(result);
//   //   });0
//   // };


//   return (
//     <>
//     <div className="container mt-3 pt-5">
//     <table>
//         <tr>
//           <td>Info here</td>
//         </tr>
//         <tr>
//           <td>
//             <div class="form-floating mt-3 mb-3">
//               <input
//                 type="text"
//                 class="form-control"

//                 placeholder="Enter Fullname"
//                 name="name"
//                 value=""
//                 onChange={(e) => handleChange(e)}
//               />
//               <label for="name">Name</label>
//             </div>
//           </td>
//           <td>
//             <div class="form-floating mt-3 mb-3">
//               <input
//                 type="number"
//                 class="form-control"
//                 value=""
//                 onChange={(e) => handleChange(e)}
//                 name="phone"
//               />
//               <label for="phone">Phone</label>
//             </div>
//           </td>
//         </tr>
//         <tr colspan="2">
//           <td>
//             <div class="form-floating mt-3 mb-3">
//               <input
//                 type="text"
//                 class="form-control"
//                 placeholder="Enter Address"
//                 name="address"
//                 value=""
//                 onChange={(e) => handleChange(e)}
//               />
//               <label for="address">Address</label>
//             </div>
//           </td>
//         </tr>
//         <tr colspan="2">
//           <td>
//             <div class="form-floating">
//               <textarea
//                 class="form-control"
//                 name="text"
//                 placeholder="Note goes here"
//                 value=""
//                 onChange={(e) => handleChange(e)}
//               ></textarea>
//               <label for="note">Notes</label>
//             </div>
//           </td>
//         </tr>   </table>
//         <button
//           type="button"
//           class="btn btn-success"
//           onClick={() => saveInfo()}
//         >
//           Save
//         </button>
//         <Link to="/cart">
//           <button type="button" class="btn btn-secondary">
//             Cancel
//           </button>
//         </Link>



//     </div>

//   </>
//   );

