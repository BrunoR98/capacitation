import React, { useContext } from 'react';
import PropTypes from 'prop-types';

//Contexts
import TripContext from '../Context/TripContext/TripContext';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    btn: {
        fontSize: '20px',
        width: '150px',
        height: '35px',
        cursor: 'pointer',
    },
});


export default function TripButton({ button, details }) {
    const classes = useStyles();
    const { setTrip } = useContext(TripContext);
    const item ={
        button: button,
        details: details,
    }

    return(
            <button className={classes.btn} onClick={() => setTrip(item)}>{button.name.toUpperCase()}</button>
    )
}

TripButton.propTypes = {
    button: PropTypes.object.isRequired,
}