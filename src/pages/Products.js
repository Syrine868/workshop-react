import React, { Component } from "react";
import styled from "styled-components";
import product from "../product.json";
import {useApi} from "../hooks/useApi";
import ProductFun from "../components/ProductFun";
export default function Products () {

const [productsApi,err] = useApi("product");
 console.log(productsApi)
 return (
   <ProductsWrapper>
   {err && <Errors>{err}</Errors>}
   {productsApi?.map((product, index) => (
   <ProductFun product={product} key={index}></ProductFun>
   ))}
   </ProductsWrapper>
   );
   }
   const Errors = styled.p`
   color: red;
   `;
   const ProductsWrapper = styled.div`
   text-align: center;
   display: flex;
   `;