import React from 'react';
import { createUseStyles } from 'react-jss';
import TripItem from '../TripItem/TripItem';
import TripButton from '../TripButton/TripButton';


const useStyles = createUseStyles({
    wrapper: {
        width: '80%',
        margin: 'auto',
        justifyContent: 'center',
        height: '750px',
        display: 'flex',
        flexDirection: 'column',
    },
    itemsWrapper: {
        display: 'flex',
    },
    topBtn: {
        textAlign: 'right',
        margin: '0 15px 15px 0',
    },
});

export default function TripBuilder() {
    const classes = useStyles();
    return(
        <div className={classes.wrapper}>
            <div className={classes.topBtn}>
                <TripButton />
            </div>
            <div className={classes.itemsWrapper}>
                <div>
                    <TripItem />
                </div>
                <div>
                    <TripItem />
                </div>
                <div>
                    <TripItem />
                </div>
            </div>
        </div>
    )
}