import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import React, { Suspense, useState } from "react";
import {UserContext} from "./contexts/UserContext";
/**import product from "./product.json";
import Product from "./components/Product";*/
import styled from "styled-components";
import Header from "./components/Header";
const Welcome = React.lazy(() => import("./pages/Welcome"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductDetails = React.lazy(() => import("./pages/ProductDetails"));
function App() {
  const [connectedUser, setConnectedUser] =useState(null); 

  return (
    <>
    <UserContext.Provider value={[connectedUser, setConnectedUser]}>
      <Header> </Header>{" "}
      <AppFrame className="App">
        <BrowserRouter basename="/">
        <Suspense fallback={<p>...Loading page please wait</p>}>
 {connectedUser ? (
 <Switch>
 <Route
 path="/welcome"
 render={(props) => <Welcome {...props} />}
 ></Route>
 <Route
 path="/products"
 render={(props) => <Products {...props} />}
 ></Route>
 <Route
 path="/product/:name"
 render={(props) => <ProductDetails {...props} />}
 ></Route>
 <Route
 exact
 render={() => (
 <p>Default rendered page! Welcome {connectedUser.name}</p>
 )}
 ></Route>
 </Switch>
 ) : (
 <Switch>
 <Route
 path="/welcome"
 render={(props) => <Welcome {...props} />}
 ></Route>
 <Route
 path="/login"
 render={(props) => <Welcome {...props} />}
 ></Route>
 <Route
 path="/products"
 render={(props) => <Products {...props} />}
 ></Route>
 <Route
 path="/product/:name"
 render={(props) => <ProductDetails {...props} />}
 ></Route>
 <Route
 exact
 render={() => <p>You are not logged in!</p>}
 ></Route>
 </Switch>
 )}
 </Suspense>
        </BrowserRouter>
      </AppFrame>
      </UserContext.Provider>
    </>
  );
}

const AppFrame = styled.div`
  text-align: center;
  display: flex;
`;
export default App;
