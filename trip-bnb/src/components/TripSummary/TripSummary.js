import React, { useContext } from 'react';
import TripContext from '../Context/TripContext/TripContext';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        borderTop: '2px solid #bbb',
        display: 'flex',
        padding: "0 20px 0 20px",
        margin: 'auto',
        width: '96%',
        '& span': {
            fontSize: '25px'
        },
    },
    list: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        fontSize: 20,
        maxHeight: 40,
        "& li": {
            width: 130,
            padding: 3,
            marginRight: '10px',
        }
    },
});

export default function TripSummary() {
    const classes = useStyles();
    const { trip } = useContext(TripContext);
    
    return(
        <div className={classes.wrapper}>
            <span>Carro:</span>
            <ul className={classes.list}>
                {trip.map( name => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </div>
    )
}