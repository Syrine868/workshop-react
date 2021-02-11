import React, { Component } from "react";
import styled from "styled-components";
import product from "../product.json";
import Product from "../components/Product";
export default class ProductDetails extends Component {
  render() {
    const name = this.props.match.params.name;
    const toRender = product.filter((product) => product.name === name)[0];
    return (
        <>
        <button onClick={() => this.props.history.replace("/products")}>
        Return to products 
        </button>
       <ProductsWrapper>
        {toRender ? (
        <Product product={toRender}></Product>
        ) : (
        <p>Product not found</p>
        )}
        </ProductsWrapper>
        </>
        );
        } 
}
const ProductsWrapper = styled.div`
  text-align: center;
  display: flex;
`;
