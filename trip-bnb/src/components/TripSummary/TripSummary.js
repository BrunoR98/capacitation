import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        borderTop: '2px solid #bbb',
        margin: 'auto',
        width: '96%',
        '& span': {
            fontSize: '25px'
        },
    }
});

export default function TripSummary() {
    const classes = useStyles();
    return(
        <div className={classes.wrapper}>
            <span>Carro: Nombre</span>
        </div>
    )
}