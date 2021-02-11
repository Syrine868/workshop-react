/* eslint-disable default-case */
import { Component } from "react";
import styled from "styled-components";
export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { product: props.product, updated: 0 };
    this.addPrice = this.addPrice.bind(this);
  }
  render() {
    return (
      <ProductFrame>
        <ProductImageWrapper>
          <ProductImage src={this.state.product.img}></ProductImage>
        </ProductImageWrapper>
        <ProductInfoWrapper>
        <a href={"/product/" + this.state.product.name}>
 {this.state.product.name}
 </a>          <span>{this.state.product.price}</span>
          <span>{Number(this.state.product.price) > 2 && "expensive"}</span>
          <button onClick={this.addPrice}>Add 0.1</button>
        </ProductInfoWrapper>
      </ProductFrame>
    );
  }

  renderAnything(number) {
    switch (number) {
      case 1:
        return <div>Hello 1</div>;
        
      case 2:
        return <div></div>;
    }
  }

  componentDidMount() {
    console.log(
      "I have finished rendering " +
        this.props.product.name +
        " price: " +
        this.state.product.price
    );
  }
  componentDidUpdate() {
    console.log("I have been updated " + this.state.updated + " times");
  }
  componentWillUnmount() {
    console.log("I'm being destroyed");
  }
  addPrice(e) {
    e.preventDefault();
    this.setState((oldState) => ({
      product: {
        ...oldState.product,
        price: Number(oldState.product.price) + 0.1,
      },
      updated: oldState.updated + 1,
    }));
  }
}

const ProductFrame = styled.div`
    border-radius:25px;
    min-height:150px;
    min-width:150px;
    background-color:rgb(110,110,110,0.7);
    margin10px;`;
const ProductImageWrapper = styled.div`
  margin: 5px;
  max-width: 150px;
`;
const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px;
`;
const ProductInfoWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  & > span {
    text-align: center;
  }
`;
