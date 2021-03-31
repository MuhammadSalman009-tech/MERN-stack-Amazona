import React from 'react';
import {Typography} from "@material-ui/core";
import useStyles from "../styles";
function Footer() {
    const classes=useStyles();
    return (
        <footer className={classes.footer}>
            <Typography align="center" variant="h6" color="textPrimary" gutterBottom>
                Footer
            </Typography>
            <Typography align="center">
                Something here to give the footer a purpose! and description about footer
            </Typography>
        </footer>
    )
}

export default Footer
