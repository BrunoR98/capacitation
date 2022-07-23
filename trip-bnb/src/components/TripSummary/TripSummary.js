import React, { useContext } from 'react';

//Context
import TripContext from '../Context/TripContext/TripContext';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        borderTop: '2px solid #bbb',
        display: 'flex',
        margin: 'auto',
        width: '96%',
        '& span': {
            padding: '15px',
            fontSize: '25px',
        },
    },
    list: {
        display: "flex",
        flexDirection: "row",
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
    let key = 0;
    return(
        <div className={classes.wrapper}>
            <span>Your selections:</span>
            <ul className={classes.list}>
                {trip.map( name => (
                    <li key={key++}>{name}</li>
                ))}
            </ul>
        </div>
    )
}