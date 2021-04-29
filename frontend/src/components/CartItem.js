import React from 'react'
import { CardContent, CardMedia, MenuItem, TextField, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/actions/cartActions';
import { useDispatch } from 'react-redux';
import useStyles from "../styles"

function CartItem({item}) {
    const classes=useStyles();
    const dispatch = useDispatch();
    return (
        <div className={classes.cartItem}>
            <CardMedia
              className={classes.cartItemMedia}
              image={item.image}
              title={item.name}
            />
            <div className={classes.details}>
              <CardContent className={`${classes.content} ${classes.itemName}`}>
                <Typography component="h5" variant="h5">
                  <Link to={`/products/${item.product}`}>{item.name}</Link>
                </Typography>
              </CardContent>
              <TextField
                    id={classes.helperText}
                    select
                    className={`${classes.detailsItem} ${classes.cartItemSelectBox}`}
                    label="Qty. "
                    value={item.qty}
                    onChange={(e)=>{
                        dispatch(addToCart(item.product,Number(e.target.value)))
                    }}
                    helperText="Please select your Quantity"
                    variant="outlined"
                    size="small"
                    >
                    {[...Array(item.quantity).keys()].map((x) => (
                        <MenuItem key={x+1} value={x+1}>
                            {x+1}
                        </MenuItem>
                    ))}
                </TextField>
                <Typography className={classes.detailsItem}>
                    ${item.price} 
                </Typography>
                <Typography className={classes.detailsItem}>
                    <button>Delete</button>
                </Typography>
            </div>
            
          </div>
    )
}

export default CartItem
