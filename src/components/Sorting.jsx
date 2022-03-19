// import React, { Component } from 'react'
// import { Form, Row, Button,FormControl } from "react-bootstrap";

// export default class Sorting extends Component {
//   render() {
//     return (
//         <>

// <div>
//          <div className="card col-md-6 pt-9 offset-md-3 offset-md-3  bg-light shadow-lg rounded">
//             <h3 className="text-center text mt-2">Enter Details</h3>
//             <div className="card-body">
//               <Form striped bordered hover variant="light">
//                 <Row className="mb-3">
//                     <Form.Group controlId="formGridZip">
//                       <Form.Label>
//                         Enter The Branch
//                       </Form.Label>

//                      <div class="custom-select col-md-6 ">

//         <select>
//           <option value="0">Branch:</option>
//           <option value="1">B-Tech</option>
//           <option value="2">BBA</option>
//           <option value="3">Bsc</option>
//           <option value="4">CTIS</option>
//         </select>
//       </div>

//                     </Form.Group>
//                     <Form.Group controlId="formGridZip">
//                       <Form.Label>
//                         Enter The Semester
//                       </Form.Label>

//                       <div class="custom-select custom-select-inline ">

//         <select>
//           <option value="0">Semester:</option>
//           <option value="1">1</option>
//           <option value="2">2</option>
//           <option value="3">3</option>
//           <option value="4">4</option>
//           <option value="5">5</option>
//           <option value="6">6</option>
//           <option value="7">7</option>
//           <option value="8">8</option>
//         </select>
//       </div>

//                     </Form.Group>
//                     <Form.Group controlId="formGridZip">
//                       <Form.Label>
//                         Enter The Course
//                       </Form.Label>

//                       <div class="custom-select custom-select-inline ">

//         <select>
//           <option value="0">Course:</option>
//           <option value="1">IT</option>
//           <option value="2">CTIS</option>
//           <option value="3">MARKETING</option>
//           <option value="4">CSC</option>
//           <option value="5">EEE</option>
//           <option value="6">ECE</option>
//           <option value="7">EE</option>
//           <option value="8">PHYSICS</option>
//           <option value="8">CHEMISTRY</option>
//           <option value="8">MATH</option>
//         </select>
//       </div>
//                     </Form.Group>
//                     <Form.Group controlId="formGridZip">
//                       <Form.Label>
//                         Date
//                       </Form.Label>
//                       <Form.Control
//                         type="Date"
//                         className='ml-3'

//                       />
//                   {/* </Form.Group>
//                   <Form.Group controlId="formGridZip">
//                       <Form.Label>
//                         Enter Branch
//                       </Form.Label>

//                       <Form.Control
//                         type="text"

//                       /> */}
//                   </Form.Group>
//                   {/* <Form.Group controlId="formGridZip">
//                       <Form.Label>
//                         Enter
//                       </Form.Label>

//                       <Form.Control
//                         type="text"
//                         value={this.state.attend}
//                         onChange={this.changeAttendHandler}
//                       />
//                   </Form.Group> */}
//                 </Row>
//                 <Button
//                   className="btn-center me-2"
//                   variant="primary"
//                   type="submit"

//                 >
//                   Submit
//                 </Button>
//                  <Button
//                   className="btn-center"
//                   variant="primary"
//                   type="submit"

//                 > Cancel</Button>
//               </Form>
//             </div>
//           </div>
//         </div>

//         </>

//     )
//   }
// }
import * as React from "react";
import * as ReactDOM from "react-dom";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Form, Row, Button, FormControl } from "react-bootstrap";

import { dataCategories, dataProducts, dataOrders } from "./data";
import { render } from "@testing-library/react";
import { useHistory } from "react-router-dom";
const defaultItemCategory = {
  categoryName: "Select Category ...",
};
const defaultItemProduct = {
  productName: "Select Product ...",
};
const defaultItemOrder = {
  orderName: "Select Order ...",
};

const Sorting = () => {
  const history = useHistory();
  const [state, setState] = React.useState({
    category: null,
    product: null,
    order: null,
    orders: dataOrders,
    products: dataProducts,
  });

  const categoryChange = (event) => {
    const category = event.target.value;
    const products = dataProducts.filter(
      (product) => product.categoryId === category.categoryId
    );
    setState({
      ...state,
      category: category,
      products: products,
      product: null,
      order: null,
    });
  };

  const productChange = (event) => {
    const product = event.target.value;
    const orders = dataOrders.filter(
      (order) => order.productId === product.productId
    );
    setState({ ...state, product: product, orders: orders, order: null });
  };

  const orderChange = (event) => {
    setState({ ...state, order: event.target.value });
  };

  const category = state.category;
  const product = state.product;
  const order = state.order;
  const hasCategory = category && category !== defaultItemCategory;
  const hasProduct = product && product !== defaultItemProduct;

  const submitHandler = ()=>{
     history.push("./listAttendace")
  }
 
  render();
  {
    return (
      <>
        <div className="container">
          <div class="card col-sm-6 row-sm-6">
            <div class="card-header">Take Attendance</div>
            <div class="card-body">
              <h5 class="card-title">Select Details</h5>
            </div>

            <div
              style={{
                display: "inline-block",
              }}
            >
              Branch
              <br />
              <DropDownList
                style={{
                  width: "300px",
                }}
                data={dataCategories}
                textField="categoryName"
                onChange={categoryChange}
                defaultItem={defaultItemCategory}
                value={category}
              />
            </div>
            <div
              style={{
                display: "inline-block",
              }}
            >
              Semester
              <br />
              <DropDownList
                style={{
                  width: "300px",
                }}
                disabled={!hasCategory}
                data={state.products}
                textField="productName"
                onChange={productChange}
                defaultItem={defaultItemProduct}
                value={product}
              />
            </div>
            <div
              style={{
                display: "inline-block",
              }}
            >
              Course
              <br />
              <DropDownList
                style={{
                  width: "300px",
                }}
                disabled={!hasProduct}
                data={state.orders}
                textField="orderName"
                onChange={orderChange}
                defaultItem={defaultItemOrder}
                value={order}
              />
            </div>
            <div className="mb-4"><button
              type="button"
              class="btn btn-primary"
              style={{ width: "120px",marginTop:"10px"  }}
              onClick={() => submitHandler()}
            >
              Submit
            </button>
            <button type="button" class="btn btn-danger" style={{ width: "120px",display:"inline",marginLeft:"20px",marginTop:"10px"}}>
              Cancel
            </button></div>
            
            {/* <Button className="btn-warning
        " variant="primary" type="submit"   style={{width:"100px"}}>
          {" "}
          Cancel
        </Button> */}
          </div>
        </div>


      </>
    );
  }
};

export default Sorting;
