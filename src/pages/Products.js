import React, { Component } from "react";
import styled from "styled-components";
import product from "../product.json";
import ProductFun from "../components/ProductFun";
export default class Products extends Component {
 render() {
 return (
 <ProductsWrapper>
 {product.map((product, index) => (
    <ProductFun product={product} key={index}></ProductFun> ))}
 </ProductsWrapper>
 );
 }
}
const ProductsWrapper = styled.div`
 text-align: center;
 display: flex;
`; 
