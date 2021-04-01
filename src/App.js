import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ProductDetails from './ProductDetails';
import Products from './Products';
import products from "./data";


function App() {
    const ProductWithId=({match})=>{
        return <ProductDetails product={products.filter((product)=> product._id===parseInt(match.params.id))[0]}/>
    }
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Products} />
                <Route exact path="/products/:id" component={ProductWithId} />
            </Switch>
        </BrowserRouter>
    )
}

export default App
