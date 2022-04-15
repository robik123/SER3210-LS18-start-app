import React, { Component } from "react";
import {useParams} from "react-router-dom";

function ProductById() {
   const {id} = useParams();
   return    <h1>Product Details - {id}</h1>;
}
class ProductDetails extends Component {
  handleSave = () => {
    // Navigate to /products
  };

  render() {
    return (
      <div>
         <ProductById/> 
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default ProductDetails;

