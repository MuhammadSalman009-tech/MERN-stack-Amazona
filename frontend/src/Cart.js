import { Button, Container, Grid, Typography } from '@material-ui/core';
import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { addToCart } from './redux/actions/cartActions';
import CartItem from "./components/CartItem";
import useStyles from "./styles";


function Cart(props) {
    const classes=useStyles();
    const productID=props.match.params.id;
    const quantity=props.location.search?Number(props.location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();
    const {cartItems}=useSelector(state=>state.cart);

    useEffect(()=>{
        if(productID){
            dispatch(addToCart(productID,quantity))
        }
    },[dispatch,productID,quantity])
    return (
        <Container maxWidth='lg'>
            <h1>Cart</h1>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                {cartItems.length===0?
                    <p>cart is empty</p>:
                    cartItems.map(item=>(
                        <CartItem item={item} key={item.product}/>    
                    ))
                    }
                </Grid>
        
                <Grid item xs={4}>
                    <Typography component='h5' variant='h5' className={classes.totalPrice}>
                    Subtotal ({cartItems.reduce((a,c)=>(a+c.qty),0)} Items) : 
                    ${cartItems.reduce((a,c)=>(a+c.qty*c.price),0)}
                    <br/><br/>

                    <Button variant="contained" color="primary" disabled={cartItems.length===0}>Checkout</Button> 
                    </Typography>
                </Grid>
            </Grid>    
        </Container>
    )
}

export default Cart
