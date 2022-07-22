import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    btn: {
        fontSize: '20px',
        width: '150px',
        height: '35px',
    },
});

export default function TripButton() {
    const classes = useStyles();
    return(
            <button className={classes.btn}>BOTON</button>
    )
}