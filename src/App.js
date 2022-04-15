import React from "react";
import Table from "./table";
import NavBar from "./components/navBar";
import {Route, Switch, Redirect, Router} from "react-router-dom";
import Products from './components/products';
import About from './components/about';
import NotFound from './components/notFound';
import { createBrowserHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import ProductDetails from "./components/productDetails";
const history = createBrowserHistory();

function App() {
  return (
    <div className="container">
   

  
     <BrowserRouter history={history}>
       <NavBar />
         <Switch>
           <Route path="/about">
              <About/>
           </Route>
           <Route path = "/products/:id">
              <ProductDetails/>
           </Route>
           <Route path="/products" render={(props)=> <Products sortBy="name" {... props}/>}>
           </Route>
           <Route exact path="/">
              <Table/>
           </Route>
           <Route path="/not-found">
              <NotFound/>
           </Route>
           <Redirect to="/not-found"></Redirect>
         </Switch>
         </BrowserRouter>

    </div>
  );
}

export default App;
