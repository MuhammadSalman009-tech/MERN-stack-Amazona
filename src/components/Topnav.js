import React from 'react'
import {AppBar,Toolbar,Typography} from "@material-ui/core";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import useStyles from "../styles";
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
            </Toolbar>
        </AppBar>
    )
}

export default Topnav
