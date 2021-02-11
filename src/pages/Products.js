import React, { Component } from "react";
import styled from "styled-components";
import product from "../product.json";
import Product from "../components/Product";
export default class Products extends Component {
 render() {
 return (
 <ProductsWrapper>
 {product.map((product, index) => (
 <Product product={product} key={index}></Product>
 ))}
 </ProductsWrapper>
 );
 }
}
const ProductsWrapper = styled.div`
 text-align: center;
 display: flex;
`; 
