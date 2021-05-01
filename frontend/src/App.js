import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ProductDetails from './ProductDetails';
import Products from './Products';
import Topnav from "./components/Topnav";
import Footer from './components/Footer';
import { CssBaseline } from '@material-ui/core';
import { connect } from 'react-redux';
import {fetchProducts} from "./redux/actions/productsActions";
import Cart from './Cart';


const mapDispatchToProps=(dispatch=>({
    fetchProducts:()=>{dispatch(fetchProducts())}
}))
const mapStateToProps=(state)=>{
    return{
        productsLoaded:state.Products.productsLoaded,
        productsError:state.Products.productsError,
        products:state.Products.products

    }
}

class App extends Component {
    
    componentDidMount(){
        this.props.fetchProducts();
    }
    
    render(){
        const ProductWithId=({match})=>{
            return <ProductDetails match={match}/>
        }
        return (
            
            <React.Fragment>
                <CssBaseline/>
                {/*Rendering Topnav Component*/}
                <Topnav/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={()=><Products products={this.props.products} 
                        productsError={this.props.productsError}
                        productsLoaded={this.props.productsLoaded}/>} />
                        <Route exact path="/products/:id" component={ProductWithId} />
                        <Route exact path="/cart/:id?" component={Cart} />
                    </Switch>
                </BrowserRouter>
                {/* Rendering Footer Component */}
                <Footer/>
            </React.Fragment>
            
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
