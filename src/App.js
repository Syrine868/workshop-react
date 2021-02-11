import './App.css';
import products from "./products.json";
import Product from "./components/Product";
import styled from "styled-components";

function App() {
  return (
    <AppFrame className="App">
    {products.map((product) => (
    <Product></Product>
    ))}
    </AppFrame>
    );
   }
   const AppFrame = styled.div`
    text-align: center`; 
export default App;
