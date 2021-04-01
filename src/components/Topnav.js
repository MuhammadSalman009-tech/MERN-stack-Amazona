import React from 'react'
import {AppBar,Toolbar,Typography} from "@material-ui/core";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import useStyles from "../styles";
// import GoogleLogin from "react-google-login";
// import { GoogleLogout } from 'react-google-login';

// const responseGoogle=(response)=>{
//     if(response.profileObj.name)
//         console.log(response.profileObj.name);
// }
// const logout=(response)=>{
//     console.log(response);
// }

function Topnav() {
    const classes=useStyles();
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
            </Toolbar>
        </AppBar>
    )
}

export default Topnav
