import React, { useEffect, useState } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ProductDetails from './ProductDetails';
import Products from './Products';
import Topnav from "./components/Topnav";
import Footer from './components/Footer';
import { CssBaseline } from '@material-ui/core';

function App() {
    const [products,setProducts]=useState([]);
    const [productsError,setProductsError]=useState(false);
    const [productsIsLoaded,setProductsIsLoaded]=useState(false);
    useEffect(()=>{
        const fetchProducts=()=>{
            return fetch("/api/products")
            .then(response=>{
                if(response.ok){
                    return response;
                }else{
                    var error=new Error("Error "+response.status+": "+response.statusText);
                    error.response=response;
                    throw error;
                }
            },(error)=>{
                const errMsg=new Error(error.message);
                throw errMsg;
            })
            .then(res=>res.json())
            .then(products=>{
                console.log(products)
                setProductsIsLoaded(true);
                setProducts(products);
            })
            .catch(error=>{
                setProductsIsLoaded(true);
                setProductsError(error.message);
            })
        }
        fetchProducts();
    },[])
    const ProductWithId=({match})=>{
        return <ProductDetails product={products.filter((product)=> product._id===parseInt(match.params.id))[0]}/>
    }
    return (
        <React.Fragment>
            <CssBaseline/>
            {/*Rendering Topnav Component*/}
            <Topnav/>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={()=><Products products={products} 
                    productsError={productsError}
                    productsIsLoaded={productsIsLoaded}/>} />
                    <Route exact path="/products/:id" component={ProductWithId} />
                </Switch>
            </BrowserRouter>
            {/* Rendering Footer Component */}
            <Footer/>
        </React.Fragment>
        
    )
}

export default App
