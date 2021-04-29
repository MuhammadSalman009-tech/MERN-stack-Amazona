import React from 'react'
import {AppBar,Badge,IconButton,Toolbar,Typography} from "@material-ui/core";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import useStyles from "../styles";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useSelector} from "react-redux";

function Topnav() {
    const classes=useStyles();
    const cartItems = useSelector(state => state.cart.cartItems);
    return (
        // Material-ui AppBar
        <AppBar position="relative">
            <Toolbar>
                <CameraAltIcon className={classes.icon}/>
                <Typography variant="h6" color="inherit">
                    Product Gallery
                </Typography>
                {/* <GoogleLogin
                    clientId="598518456977-52n11mpe3oorrqm689fcutch38nkl1ha.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                
                <GoogleLogout
                clientId="598518456977-52n11mpe3oorrqm689fcutch38nkl1ha.apps.googleusercontent.com"
                buttonText="Logout"
                onLogoutSuccess={logout}
                >
                </GoogleLogout> */}
                    {cartItems.length?
                        <IconButton aria-label="cart" className={classes.cart}> 
                            <Badge badgeContent={cartItems.length} color="secondary">
                                <ShoppingCartIcon className={classes.cartColor} />
                            </Badge>
                        </IconButton> : 
                        <IconButton aria-label="cart" className={classes.cart}> 
                            <Badge badgeContent={0} color="secondary" showZero>
                                <ShoppingCartIcon className={classes.cartColor} />
                            </Badge>
                        </IconButton>}
                    
            </Toolbar>
        </AppBar>
    )
}

export default Topnav
