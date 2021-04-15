import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import ProductDetails from './ProductDetails';
import Products from './Products';
import Topnav from "./components/Topnav";
import Footer from './components/Footer';
import { CssBaseline } from '@material-ui/core';
import { connect } from 'react-redux';
import {fetchProducts} from "./redux/ActionCreators";


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
            return <ProductDetails product={this.props.products.filter((product)=> product._id===parseInt(match.params.id))[0]}/>
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
                    </Switch>
                </BrowserRouter>
                {/* Rendering Footer Component */}
                <Footer/>
            </React.Fragment>
            
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
